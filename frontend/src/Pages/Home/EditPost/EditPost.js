import React, { Component } from 'react';

class EditPost extends Component {
  state = {
    post: {
      title: this.props.post.title,
      content: this.props.post.content,
      tag: this.props.post.tag
    }
  };

  handleOnChange = e => {
    let post = Object.assign({}, this.state.post);
    post[e.target.name] = e.target.value;
    this.setState({ post });
  };

  render() {
    return (
      <form className="EditPost">
        <span
          onClick={e => {
            this.props.savePost(this.state.post, e);
          }}
          >Save</span>
        <input
          name="title"
          onChange={this.handleOnChange}
          value={this.state.post.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={this.handleOnChange}
          value={this.state.post.content}
          rows={4}
          placeholder="Content"
        />
        <input
          name="tag"
          onChange={this.handleOnChange}
          value={this.state.post.tag}
          placeholder="Tag"
        />
      </form>
    );
  }
}

export default EditPost;
