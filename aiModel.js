// aiModel.js

const tf = require('@tensorflow/tfjs');
const natural = require('natural');
const User = require('./userModel');
const Content = require('./contentModel');

class AIModel {
  constructor() {
    this.tokenizer = new natural.WordTokenizer();
    this.classifier = new natural.BayesClassifier();
  }

  async trainModel() {
    const users = await User.find({});
    const contents = await Content.find({});

    users.forEach(user => {
      const userPreferences = user.preferences;
      const userProgress = Array.from(user.progress.values());
      const userPerformance = Array.from(user.performance.values());

      contents.forEach(content => {
        const contentFeatures = this.tokenizer.tokenize(content.description);
        const userFeatures = [...userPreferences, ...userProgress, ...userPerformance];

        this.classifier.addDocument(userFeatures, contentFeatures);
      });
    });

    this.classifier.train();
  }

  recommendContent(user) {
    const userPreferences = user.preferences;
    const userProgress = Array.from(user.progress.values());
    const userPerformance = Array.from(user.performance.values());
    const userFeatures = [...userPreferences, ...userProgress, ...userPerformance];

    const recommendedContent = this.classifier.classify(userFeatures);

    return recommendedContent;
  }

  async updateContentRecommendation() {
    const users = await User.find({});

    users.forEach(async user => {
      const recommendedContent = this.recommendContent(user);
      const contentToUpdate = await Content.findOne({ title: recommendedContent });

      if (contentToUpdate) {
        contentToUpdate.recommendedByAI = true;
        await contentToUpdate.save();
      }
    });
  }
}

module.exports = new AIModel();
