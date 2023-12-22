import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import User from './User';
import Content from './Content';
import Assessment from './Assessment';

class App extends Component {
  state = {
    users: [],
    content: [],
    assessments: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const users = await axios.get('/api/users');
      const content = await axios.get('/api/content');
      const assessments = await axios.get('/api/assessments');

      this.setState({
        users: users.data,
        content: content.data,
        assessments: assessments.data
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { users, content, assessments } = this.state;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact path="/"
              render={(props) => <User {...props} users={users} />}
            />
            <Route
              path="/content"
              render={(props) => <Content {...props} content={content} />}
            />
            <Route
              path="/assessments"
              render={(props) => <Assessment {...props} assessments={assessments} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
