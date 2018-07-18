import React, { Component } from 'react';

import EOSClient from '../../Utils/eos-client';
import EditPost from './Edit';

class Post extends Component {
  constructor(props) {
    super(props);
    const contractAccount = process.env.REACT_APP_EOS_ENV === 'local' ? process.env.REACT_APP_EOS_LOCAL_CONTRACT_ACCOUNT : process.env.REACT_APP_EOS_TEST_CONTRACT_ACCOUNT;
    this.eos = new EOSClient(contractAccount, contractAccount);
  }

  state = {
    editing: false,
    liked: false,
    post: {
      title: this.props.post.title,
      content: this.props.post.content,
      tag: this.props.post.tag,
      likes: this.props.post.likes
    }
  };

  savePost = (post, e) => {
    const updatePost = Object.assign(this.props.post, post);
    this.editPost(updatePost, e);
    this.setState(prevState => ({
      editing: !prevState.editing,
      post
    }));
  };

  editPost = (post, e) => {
    this.eos
      .transaction(process.env.REACT_APP_EOS_ACCOUNT,
        'editpost',
        {
          ...post
        })
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  deletePost = (pkey, e) => {
    this.setState(prevState => ({
      posts: prevState.posts.filter((post, index) => post.pkey !== pkey)
    }));

    this.eos
      .transaction('deletepost', {
        pkey
      })
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };


  render() {
    const editing = this.state.editing;
    return (
      <div className='item'>
        {!editing ? (
          <div>
            <h4>{this.state.post.title}</h4>
            <span onClick={e => { this.props.deletePost(this.props.post.pkey, e); }}>Delete </span>
            <span onClick={e => {
                this.setState(prevState => ({
                  editing: !prevState.editing
                }));
              }}
            >Edit </span>
            <span onClick={e => {
                this.setState(prevState => ({
                  liked: !prevState.liked,
                  post: Object.assign(prevState.post, {
                    likes: prevState.liked ? prevState.post.likes : prevState.post.likes + 1
                  })
                }));
                this.props.likePost(this.props.post.pkey, e);
              }}
            >Like </span>
            <p>By: {this.props.post.author}</p>
            <p>{this.state.post.content}</p>
            <p>Likes: {this.state.post.likes}</p>
            <p>{'#' + this.state.post.tag}</p>
          </div>
        ) : (
          <EditPost savePost={this.savePost} post={this.props.post} />
        )}
      </div>
    );
  }
}

export default Post;
