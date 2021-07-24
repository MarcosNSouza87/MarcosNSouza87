import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

type MenuHeaderProps = {
  setCloseMenu(open: boolean): void;
};

function MenuHeader(props: MenuHeaderProps) {
  return (
    <div className="back" onClick={() => props.setCloseMenu(false)}>
      <div className="mm-header">
        <button
          className="close-menu"
          onClick={() => props.setCloseMenu(false)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#181818"
              stroke-width="5"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#181818"
              stroke-width="5"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/works">WORKS</Link>
          </li>
          <li>
            <Link to="/">SERVICES</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

type HeaderProps = {
  titlePage: string;
};

export default function Header(props: HeaderProps) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header-content">
      <nav>
        <h3>
          <span>{props.titlePage.substr(0, 1)}</span>
          {props.titlePage.substr(1)}
        </h3>

        <button className="btn-menu" onClick={() => setOpenMenu(!openMenu)}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 15H26.25"
              stroke="#FEFEFE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 7.5H26.25"
              stroke="#FEFEFE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 22.5H26.25"
              stroke="#FEFEFE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        {openMenu && <MenuHeader setCloseMenu={setOpenMenu} />}
      </nav>
    </header>
  );
}
