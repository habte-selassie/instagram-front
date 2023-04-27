import React, { useState } from 'react';

function PostComponent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(title, content);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Post Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="content">Post Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default PostComponent;

