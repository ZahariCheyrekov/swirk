import { useState } from "react";

import { uploadImage } from "../services/uploadImage";

import "./CreatePost.scss";

const CreatePost = () => {
  const [imageSrc, setImageSrc] = useState<String | ArrayBuffer | null>("");
  const [uploadData, setUploadData] = useState<Object>();

  const handleOnChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      if (onLoadEvent.target) {
        setImageSrc(onLoadEvent.target.result);
      }
      setUploadData(undefined);
    };

    if (changeEvent.target.files) {
      reader.readAsDataURL(changeEvent.target.files[0]);
    }
  };

  const handleOnSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const { imageUrl, data } = await uploadImage(ev);

    setImageSrc(imageUrl);
    setUploadData(data);
  };

  return (
    <main className="main__create">
      <form
        action="POST"
        className="main__create--form create__form"
        onSubmit={handleOnSubmit}
      >
        <legend className="create__form--legend legend">Create Post</legend>
        <textarea
          name="postContent"
          placeholder="What do you think?"
          className="create__form--textarea create__content content textarea"
        />
        <p>
          <input type="file" name="file" onChange={handleOnChange} />
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
