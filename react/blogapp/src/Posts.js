import React, { Component } from 'react';
import { Post } from './Post';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], hasError: false };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        const loaded = data.slice(0, 5).map(p => new Post(p.id, p.title, p.body));
        this.setState({ posts: loaded });
      })
      .catch(err => this.setState({ hasError: true }));
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('Error occurred: ' + error);
  }

  render() {
    if (this.state.hasError) return <h2>Error loading posts.</h2>;
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(p => (
          <div key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
