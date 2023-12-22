import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  state = {
    user: null,
    loading: true
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const response = await axios.get(`/api/users/${this.props.match.params.id}`);
      this.setState({ user: response.data, loading: false });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return <div>No user found</div>;
    }

    return (
      <div className="User">
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Learning Style: {user.preferences.learningStyle}</p>
        <p>Interests: {user.preferences.interests.join(', ')}</p>
        <h3>Progress</h3>
        {Object.entries(user.progress).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
        <h3>Performance</h3>
        {Object.entries(user.performance).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    );
  }
}

export default User;
</p>