import IconBehance from '../../../assets/icons/IconBehance';
import IconGithub from '../../../assets/icons/IconGithub'
import IconLinkedin from '../../../assets/icons/IconLinkedin';
import { MenuSocialMediaContainer } from './styles';

type SocialMediaProps = {
  behance: string;
  github: string;
  linkedin: string;
};

export default function SocialMedia({
  github,
  linkedin,
  behance,
}: SocialMediaProps) {
  return (
    <MenuSocialMediaContainer>
      <a href={`https://www.behance.net/${behance}`}>
        <IconBehance color="#FEFEFE" />
      </a>
      <a href={`https://github.com/${github}`}>
        <IconGithub color="#fefefe" />
      </a>
      <a href={`https://www.linkedin.com/in/${linkedin}`}>
        <IconLinkedin color="#fefefe" />
      </a>
    </MenuSocialMediaContainer>
  );
}
