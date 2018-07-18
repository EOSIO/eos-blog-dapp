import React from 'react';
import { NavLink } from 'react-router-dom';

import Post from './Post';

const Display = ({ posts, deletePost, editPost, likePost }) => {
  return posts.map((post, index) => {
    return (
      <NavLink key={index} to={`/posts/${index}`}>
        <Post
          post={post}
          deletePost={deletePost}
          editPost={editPost}
          likePost={likePost}
        />
      </NavLink>
    );
  });
};

export default Display;
