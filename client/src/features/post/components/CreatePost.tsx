import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createPost } from "../api/post-api";
import { uploadImage } from "../services/uploadImage";
import { getUserId } from "../../../services/localStorage";

import Navigation from "../../../layouts/nav/Navigation";
import Footer from "../../../layouts/footer/Footer";

import "./CreatePost.scss";

const CreatePost = () => {
  const navigate = useNavigate();
  const [postContent, setPostContent] = useState("");
  const [imageSrc, setImageSrc] = useState<String | ArrayBuffer | null>("");

  const handleContentChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(ev.target.value.split("\n").join("<br/>"));
  };

  const handleOnChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      if (onLoadEvent.target) {
        setImageSrc(onLoadEvent.target.result);
      }
    };

    if (changeEvent.target.files) {
      reader.readAsDataURL(changeEvent.target.files[0]);
    }
  };

  const handleOnSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    let imageUrl = "";
    if (imageSrc) {
      imageUrl = await uploadImage(ev);
    }

    const post = await createPost({
      postContent,
      imageSrc: imageUrl,
      userId: getUserId(),
    });

    if (post) {
      navigate("/");
    }
  };

  return (
    <>
      <Navigation />
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
            onChange={handleContentChange}
          />
          <input
            type="file"
            name="file"
            onChange={handleOnChange}
            className="create__form--file create__file file"
          />
          <button
            type="submit"
            className="create__form--button create__button button__element button"
          >
            Create
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default CreatePost;
