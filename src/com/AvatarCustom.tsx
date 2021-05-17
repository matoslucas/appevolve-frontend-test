import { Avatar, Image } from "antd";
import avatarImageSource from "../img/avatar.png";

const AvatarCustom = () => {
  return (
    <div
      style={{
        position: "relative",
        margin: "1rem",
      }}
    >
      <div
        style={{
          border: "2px solid white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar src={avatarImageSource} size="large" />
      </div>
      <div
        style={{
          borderRadius: "50%",
          position: "absolute",
          bottom: "0px",
          right: "0px",
          width: "12px",
          height: "12px",
          /* Turquoise */
          background: "#55A3AE",
        }}
      />
    </div>
  );
};
export default AvatarCustom;
