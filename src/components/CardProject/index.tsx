//import {ReactNode} from 'react'
import IconGithub from "../../assets/icons/IconGithub";
import IconLink from "../../assets/icons/IconLink";
import "./styles.scss";

type CardItemProps = {
  //   imgCard:ReactNode;
  title: string;
  description: string;
  developer_link: string;
  production_link: string;
  tecnologies: string;
};

type CardProjectProps = {
  item: CardItemProps;
};

export default function CardProject({ item }: CardProjectProps) {
  return (
    <div className="card">
      <img src="" alt="" />
      <div className="info">
        <div className="description">
          <h3 className="title">{item.title}</h3>
          {item.description}
        </div>
        <span className="tecs">Web . React . Typescript</span>
      </div>
      <div className="links">
        <a href={`https://github.com/${item.developer_link}`} className={`dev ${item.developer_link === '/' && 'disable'}`}>
          <span className="lnk-ex">Projeto</span>
          <IconGithub color="" />
        </a>
        <a href={`https://github.com/${item.production_link}`} className={`prod ${item.production_link === '/' && 'disable'}`}>
          <span className="lnk-ex">Produção</span>
          <IconLink color="" />
        </a>
      </div>
    </div>
  );
}
