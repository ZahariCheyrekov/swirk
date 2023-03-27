import React, { useEffect, useState } from "react";

import { uploadImage } from "../../post/services/uploadImage";
// TODO: Extract this request in the global folder
import { getUserData, editUserData } from "../../profile/api/user-api";

import Footer from "../../../layouts/footer/Footer";
import Navigation from "../../../layouts/nav/Navigation";

import "./EditProfile.scss";
import { IUserInStorage } from "../../../interfaces/User";

const EditProfile = () => {
  const [imgCover, setImgCover] = useState<any>("");
  const [profileImg, setProfileImg] = useState<any>("");
  const [user, setUser] = useState<IUserInStorage>();
  const [userData, setUserData] = useState({
    bio: "",
    fullName: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userFetched = await getUserData("zaharicheyrekov");
      setUser(userFetched);
    };
    fetchUser();
  }, []);

  const handleOnChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      if (onLoadEvent.target) {
        if (changeEvent.target.className.includes("profile__cover")) {
          setImgCover(
            onLoadEvent.target.result !== null ? onLoadEvent.target.result : ""
          );
        } else {
          setProfileImg(
            onLoadEvent.target.result !== null ? onLoadEvent.target.result : ""
          );
        }
      }
    };

    if (changeEvent.target.files) {
      reader.readAsDataURL(changeEvent.target.files[0]);
    }
  };

  const handleOnSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    let imageUrl = "";
    if (profileImg) {
      imageUrl = await uploadImage(ev);
    }

    // TODO: Create implementation for user edit
  };

  const handleDataChange = (
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUserData({ ...userData, [ev.target.name]: ev.target.value });
  };

  const handleEditSubmit = async () => {
    console.log(userData);
    if (user) {
      const editedUser = await editUserData(user.nickname, userData);
      console.log(editedUser);
    }
  };

  return (
    <>
      <Navigation />
      <main className="main__edit">
        <section className="edit__section">
          <h2 className="edit__heading--name edit__heading">Edit profile</h2>
          <article className="edit__article--images article__images">
            <input
              type="file"
              name="file"
              className="edit__form--file edit__file file profile__cover"
              onChange={handleOnChange}
            />
            <img
              src={
                imgCover
                  ? imgCover
                  : "https://res.cloudinary.com/dhcdh9u9h/image/upload/v1677363416/swirk/rf92ofpoxb8fgbl0fmel.jpg"
              }
              alt="John Doe"
              className="edit__img--background img__background"
            />
            <div className="profile__image--wrapper image__wrapper">
              <img
                src={
                  profileImg
                    ? profileImg
                    : "https://res.cloudinary.com/dhcdh9u9h/image/upload/v1677363416/swirk/rf92ofpoxb8fgbl0fmel.jpg"
                }
                alt="John Doe"
                className="edit__img--photo img__photo"
              />
              <input
                type="file"
                name="file"
                className="edit__form--file edit__file file profile__picture"
                onChange={handleOnChange}
              />
            </div>
          </article>
          <form
            action="POST"
            className="edit__profile--form edit__form"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Name"
              className="auth__form--input auth__name name input"
              onChange={handleDataChange}
            />
            <textarea
              name="bio"
              placeholder="Bio"
              className="edit__form--textarea edit__bio bio textarea"
              onChange={handleDataChange}
            />
            <span className="edit__span--buttons span__buttons">
              <button className="edit__button--cancel edit__button cancel">
                Cancel
              </button>
              <button
                className="edit__button--save edit__button save"
                type="submit"
                onClick={handleEditSubmit}
              >
                Save
              </button>
            </span>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EditProfile;
