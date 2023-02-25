import { useState } from "react";

import { uploadImage } from "../services/uploadImage";

import "./CreatePost.scss";

const CreatePost = () => {

  return (
    <main className="main__create">
      <form
        action="POST"
        className="main__create--form create__form"
       
      >
        <legend className="create__form--legend legend">Create Post</legend>
        <textarea
          name="postContent"
          placeholder="What do you think?"
          className="create__form--textarea create__content content textarea"
        />
        <p>
          <input type="file" name="file"/>
        </p>
        <button
          type="submit"
          className="create__form--button create__button button__element button"
        >
          Create
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
