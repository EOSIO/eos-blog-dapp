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

// const Display = ({ posts, deletePost, editPost, likePost }) => (
//   <div className='cards'>
//     {posts.map(({ post, index }) => (
//
//         <Post
//           post={post}
//           deletePost={deletePost}
//           editPost={editPost}
//           likePost={likePost}
//           key={index}
//         />
//     ))}
//   </div>
//
// );
//
// export default Display;

      //
      //
      //
      //


// const Display = ({ posts, deletePost, editPost, likePost }) => {
//   return posts.map((post, index) => {
//     return (
//       <Post className='cards'
//         post={post}
//         deletePost={deletePost}
//         editPost={editPost}
//         likePost={likePost}
//         key={index}
//       />
//     );
//   });
// };
//
// export default Display;
