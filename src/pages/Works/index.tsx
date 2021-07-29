import Header from "../../components/Header";
import "./styles.scss";
import SearchInput from "../../components/SearchInput";
import Card from "../../components/CardProject";

const listCards = [
  {
    id: 1,
    imgLogo: "",
    title: "Projeto 1",
    description: "este é um projeto de testes",
    tecnologies: "web . React . Typescript",
    developer_link: "/1",
    production_link: "/",
  },
  {
    id: 2,
    imgLogo: "",
    title: "Projeto 2",
    description: "este é um projeto de testes",
    tecnologies: "web . React . Typescript",
    developer_link: "/1",
    production_link: "/",
  },
  {
    id: 3,
    imgLogo: "",
    title: "Projeto 3",
    description: "este é um projeto de testes",
    tecnologies: "web . React . Typescript",
    developer_link: "/1",
    production_link: "/1",
  },
];

export default function WorksPage() {
  return (
    <div className="works">
      <Header titlePage="Works" />
      <main>
        <SearchInput />
        <div className="row">
          <div className="slider">
            <div className="row__posters" id="row_pst">
              {listCards.map((item) => (
                <Card item={item} key={item.id}/>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
