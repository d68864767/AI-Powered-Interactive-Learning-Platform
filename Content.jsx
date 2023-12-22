import React, { Component } from 'react';
import axios from 'axios';

class Content extends Component {
  state = {
    content: this.props.content
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      this.setState({ content: this.props.content });
    }
  }

  renderContent = () => {
    const { content } = this.state;

    return content.map((item, index) => (
      <div key={index} className="content-item">
        <h2>{item.title}</h2>
        <p>Type: {item.type}</p>
        <p>Topic: {item.topic}</p>
        <p>Difficulty Level: {item.difficultyLevel}</p>
        <p>Description: {item.description}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">Go to Content</a>
        <p>Recommended by AI: {item.recommendedByAI ? 'Yes' : 'No'}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className="content">
        <h1>Content</h1>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
