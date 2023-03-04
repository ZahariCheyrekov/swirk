import { Link } from "react-router-dom";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./ProfileBubble.scss";

const ProfileBubble = () => {
  return (
    <Link to={"/profile"} className="bubble__link">
      <div className="bubble__wrapper">
        <section className="bubble__section">
          <article className="bubble__article--img bubble__image">
            <img
              src="https://res.cloudinary.com/dhcdh9u9h/image/upload/v1677363416/swirk/rf92ofpoxb8fgbl0fmel.jpg"
              alt="John Doe"
              className="bubble__img img"
            />
          </article>
          <article className="bubble__article--user user__data">
            <h4 className="bubble__heading--name heading__name">John Doe</h4>
            <h4 className="bubble__heading--nickname heading__nickname">
              @johndoe
            </h4>
          </article>
          <article className="bubble__article--icon">
            <MoreHorizIcon className="bubble__icon--dots dots__icon" />
          </article>
        </section>
      </div>
    </Link>
  );
};

export default ProfileBubble;
