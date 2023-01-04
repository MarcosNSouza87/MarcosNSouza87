import React from 'react';
import IconAbout from '../../assets/icons/IconAbout';
import IconContactMe from '../../assets/icons/IconContactMe';
import IconExperience from '../../assets/icons/IconExperience';
import IconHome from '../../assets/icons/IconHome';
import IconProjects from '../../assets/icons/IconProjects';
import ButtonLink from './ButtonLink';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="menuSide"></div>
      <div className="menu">
        <ButtonLink label="Home" goTo={() => {}} >
          <IconHome color="#f00" />
        </ButtonLink>
        <ButtonLink label="About" goTo={() => {}} >
          <IconAbout color="#f00" />
        </ButtonLink>
        <ButtonLink label="Experience" goTo={() => {}}>
          <IconExperience color="#f00" />
        </ButtonLink>
        <ButtonLink label="Contact me" goTo={() => {}}>
          <IconContactMe color="#f00" />
        </ButtonLink>
        <ButtonLink label="Projects" goTo={() => {}}>
          <IconProjects color="#f00" />
        </ButtonLink>
      </div>
      <div className="search"></div>

    </HeaderContainer>
  )
}

export default Header;