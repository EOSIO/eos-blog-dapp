import React from 'react';

const Display = ({handleOnChange, formSubmit}) => (
  <form onSubmit={formSubmit} className="CreatPost">
      <input
        name="title"
        onChange={handleOnChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={handleOnChange}
        rows={4}
        placeholder="Content"
      />
      <input
        name="tag"
        onChange={handleOnChange}
        placeholder="Tag"
      />
    <button
      onClick={formSubmit}
      type="submit"
      className="login-form-button"
    >
      Create Post
    </button>
  </form>
)


export default Display;
