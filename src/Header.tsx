export const Header = () => {
  return (
    <div className={"header"}>
      <div className={"headerLeft"} />
      <div className={"headerCenter"}>
        <a className={"headerTitle"} href="https://sam-swarr.github.io/">
          Sam Swarr
        </a>
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
