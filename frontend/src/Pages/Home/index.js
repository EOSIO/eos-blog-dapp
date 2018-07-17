import React, { Component } from 'react';

import EOSClient from '../../Utils/eos-client';
import Display from './Display';

class Home extends Component {
  state = {
    loading: false,
    posts: []
  };

  componentDidMount () {
    const contractAccount = process.env.REACT_APP_EOS_ENV === 'local' ? process.env.REACT_APP_EOS_LOCAL_CONTRACT_ACCOUNT : process.env.REACT_APP_EOS_TEST_CONTRACT_ACCOUNT;
    const eos = new EOSClient(contractAccount, contractAccount);

    eos
      .getTableRows('post')
      .then(data => {
        console.log(data);
        this.setState({ posts: data.rows });
      })
      .catch(e => {
        console.error(e);
      });
  }

  render() {
    return (
      <div className="cards">
        <Display
          posts={this.state.posts}
          deletePost={this.deletePost}
          editPost={this.editPost}
          likePost={this.likePost}
        />
      </div>
    );
  }
}

export default Home;
