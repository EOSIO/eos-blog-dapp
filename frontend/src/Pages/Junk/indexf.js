// import React from 'react'
//
// const PostCreate = () => (
//   <div>
//     PostCreate
//   </div>
// )
//
// export default PostCreate
//
//
// <form type="submit" onSubmit={this.onSearch}>
//   <input type="text" ref={node => this.input = node} />
//   <button type="button">Search</button>
// </form>

// {
//   this.state.hits &&
//   this.state.hits.map(item => <div key={item.objectID}>{item.title}</div>)
// }


import React, { Component } from 'react'

class PostCreate extends Component {
  state = {
    title: '',
    content: '',
    postsList: []
  }

  onChange = e => {
    //localStorage.setItem('postList', e)
    this.setState({ [e.target.name]: e.target.value })
  }

  createPost = post => {
    post.preventDefault()
    this.setState({
      ...this.state,
      postsList: this.state.postsList.concat(this.state.title, this.state.content)
    })

    //let listOfPosts = []

    // post.target.forEach(function(value, key) {
    //
    // });
    //
    //
    // for (var k in target){
    //   if (target.hasOwnProperty(k)) {
    //        alert("Key is " + k + ", value is" + target[k]);
    //   }
    // }

    console.log(post.target)
    //this.setState({ postsList: [...this.state.posts, post.target] });
  }




  //this.setState({ postsList: [...this.state.posts, [ { "title" : this.state.title, "content" : this.state.content } ] });
  //this.state.postList.push([e.target.name]: e.target.value)
  // post.preventDefault()
  // localStorage.setItem('postsList', JSON.stringify(post.target));



  //this.state.postList.push([e.target.name]: e.target.value)
  // localStorage.setItem('postList', e.target.value)

  // onSubmit = e => {
  //   e.preventDefault()
  //   localStorage.setItem('myData', JSON.stringify(...this.state))
  //   console.log(JSON.stringify(...this.state))
  //   this.setState({
  //     title: '',
  //     content: '',
  //   })
  // }

  //
  // createPost = e => {
  //   e.preventDefault()
  //   this.setState({ posts: [...this.state.posts, post] });
  //
  //
  //   console.log(e)
  //   let listOfPosts = this.state.postsList
  //   listOfPosts.concat({
  //     title: this.state.title,
  //     content: this.state.content
  //   })
  //
  //   this.setState({
  //     ...this.state,
  //     postsList: [ {listOfPosts} ]
  //   })
  //
  //   // const a = []
  //   // a.push(e.target)
  //   // //const data = new FormData(e.target);
  //   this.state.postList.concat({
  //     title: this.state
  //   })
  //
  //
  //   // var a = [];
  //   // // Parse the serialized data back into an aray of objects
  //   // a = JSON.parse(localStorage.getItem('session'));
  //   // // Push the new data (whether it be an object or anything else) onto the array
  //   // a.push(data);
  //   // // Alert the array value
  //   // alert(a);  // Should be something like [Object array]
  //   // // Re-serialize the array back into a string and store it in localStorage
  //   // localStorage.setItem('session', JSON.stringify(a));
  //   //
  //   //
  //   // e.preventDefault()
  //   // //console.log(localStorage.getItem('postList'))
  //   // this.state.postList.concat(JSON.stringify(...this.state))
  //   //this.setState({ posts: [] })
  // }


  render() {
    return (
      <div>
       <h1>Add a post</h1>

       <form onSubmit={this.createPost}>
         <input type="text" id="title" name='title' onChange={this.onChange} /><br />
         <input type="text" id="content" name='content' onChange={this.onChange} /><br />
         <button type="submit">Create</button>
       </form>

       {
         this.state.posts
       }

     </div>
    )
  }
}

export default PostCreate
