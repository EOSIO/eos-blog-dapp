import React, { Component } from 'react';

import EOSClient from '../../Utils/eos-client';
import Display from './Display';

class PostCreate extends Component {
  state = {
    title: '',
    content: '',
    tag: '',
    loading: false,
    posts: []
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.createPost({ ...this.state, likes: 0 });
    this.setState({
      title: '',
      content: '',
      tag: ''
    });
  };

  createPost = post => {
    const contractAccount = process.env.REACT_APP_EOS_ENV === 'local' ? process.env.REACT_APP_EOS_LOCAL_CONTRACT_ACCOUNT : process.env.REACT_APP_EOS_TEST_CONTRACT_ACCOUNT;
    const eos = new EOSClient(contractAccount, contractAccount);

    this.setState({
      loading: true,
      posts: [...this.state.posts, post]
     });

    eos
      .transaction(
        process.env.REACT_APP_EOS_ACCOUNT,
        'createpost', {
        author: process.env.REACT_APP_EOS_ACCOUNT,
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

  render() {
    return (
      <Display handleOnChange={this.handleOnChange} formSubmit={this.formSubmit} />
    );
  }
}

export default PostCreate;
