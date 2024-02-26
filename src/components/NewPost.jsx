import { useState } from "react";
import blogs from "../services/blogs";

const NewPost = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const doSubmitForm = async (event) => {
    event.preventDefault();

    const post = await blogs.create({ title, author, url });
    onCreate(post);
  };

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={doSubmitForm}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div></div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="url">url</label>
          <input
            id="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default NewPost;