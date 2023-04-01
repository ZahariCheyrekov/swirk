import { useContext } from "react";
import { Link } from "react-router-dom";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import defaultPhoto from "../../assets/default-photo.png";

import { UserContext } from "../../contexts/UserContext";

import "./ProfileBubble.scss";

const ProfileBubble = () => {
  const { user } = useContext(UserContext);

  return (
    <Link to={`/profile/${user.nickname}`} className="bubble__link">
      <div className="bubble__wrapper">
        <section className="bubble__section">
          <article className="bubble__article--img bubble__image">
            <img
              src={user.profilePicture ? user.profilePicture : defaultPhoto}
              alt={user.fullName}
              className="bubble__img img"
            />
          </article>
          <article className="bubble__article--user user__data">
            <h4 className="bubble__heading--name heading__name">
              {user.fullName}
            </h4>
            <h4 className="bubble__heading--nickname heading__nickname">
              @{user.nickname}
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
