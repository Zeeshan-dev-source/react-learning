import { useState } from "react";
import "../styles/ProfileCard.css";

function ProfileCard({ name, role, image }) {
  const [isFollowing, setIsFollowing] = useState(false);

  function handleFollow() {
    setIsFollowing(!isFollowing);
  }

  return (
    <div className="card">
      <img src={image} alt={name} className="profile-img" />

      <h2>{name}</h2>

      <p>{role}</p>

      <button
        className={isFollowing ? "following" : "follow"}
        onClick={handleFollow}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;


