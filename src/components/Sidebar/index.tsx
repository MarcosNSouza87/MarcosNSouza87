import ButtonTheme from "./ButtonTheme";
import SocialMedia from "./social-media-menu";
import { SidebarContainer } from "./styles";
//import { Link } from "react-router-dom";
import "./styles.ts";
type SidebarProps = {
  behance: string;
  github: string;
  linkedin: string;
  changeTheme(dark:boolean):void;
};

export default function Sidebar({ behance, github, linkedin,changeTheme }: SidebarProps) {
  return (
    <SidebarContainer>
      <ButtonTheme setTheme={changeTheme} />
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
      <SocialMedia github={github} linkedin={linkedin} behance={behance} />
    </SidebarContainer>
  );
}
