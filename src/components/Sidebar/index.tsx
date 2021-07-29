import ButtonTheme from "./ButtonTheme";
import SocialMedia from "./social-media-menu";
import { SidebarContainer } from "./styles";
//import { Link } from "react-router-dom";
import "./styles.ts";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <ButtonTheme theme={true} />
      {/* <div className="menu">
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
      </div> */}
      <SocialMedia github="/" linkedin="/" behance="/" />
    </SidebarContainer>
  );
}
