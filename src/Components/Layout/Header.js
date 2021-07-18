import classes from "./Header.module.css";

import HeadBand from "./HeadBand";

import background from "../../Assets/Img/Background Image.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <HeadBand />

      <nav className={classes.nav}>
        <div className={classes["nav-left"]}>
          <div className={classes.logo}>React Meals</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={classes["nav-right"]}>
          <HeaderCartButton />
        </div>
      </nav>

      <div className={classes["background-image"]}>
        <img src={background} alt="header background" />
      </div>
    </header>
  );
};

export default Header;
