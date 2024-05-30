import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={"header"}>
      <div className={"headerLeft"} />
      <div className={"headerCenter"}>
        <div className={"headerTitle"} onClick={() => navigate("/")}>
          Sam Swarr
        </div>
      </div>
      <div className={"headerRight"}>
        <a
          className={"linkedinLogo"}
          href="https://www.linkedin.com/in/samuel-swarr/"
          target="_blank"
        />
        <a
          className={"githubLogo"}
          href="https://github.com/sam-swarr/"
          target="_blank"
        />
        <a
          className={"instagramLogo"}
          href="https://www.instagram.com/swarrizard_art/"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Header;
