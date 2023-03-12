import Footer from "../../../layouts/footer/Footer";

import "./EditProfile.scss";

const EditProfile = () => {
  return (
    <>
      <main className="main__edit">
        <section className="edit__section">
          <h2 className="edit__heading--name edit__heading">Edit profile</h2>
          <form action="POST" className="edit__profile--form edit__form">
            <input
              type="file"
              name="file"
              className="edit__form--file edit__file file"
            />
            <input
              type="file"
              name="file"
              className="edit__form--file edit__file file"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="auth__form--input auth__name name input"
            />
            <textarea
              name="bio"
              placeholder="What do you think?"
              className="edit__form--textarea edit__bio bio textarea"
            />
            <span className="edit__span--buttons span__buttons">
              <button className="edit__button--cancel edit__button cancel">
                Cancel
              </button>
              <button className="edit__button--save edit__button save">
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
