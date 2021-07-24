import ButtonTheme from "./ButtonTheme";
import SocialMedia from "./social-media-menu";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="menu">
        <ButtonTheme theme={true} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul>
      </div>
      <SocialMedia github="/" linkedin="/" behance="/" />
    </aside>
  );
}
