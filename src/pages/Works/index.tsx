import Header from "../../components/Header";
import "./styles.scss";
import imgArrowLeft from "../../assets/images/arrow-left.svg";
import imgArrowRight from "../../assets/images/arrow-right.svg";
import SearchInput from "../../components/SearchInput";
import Card from '../../components/CardProject'
import { Link } from "react-router-dom";

export default function WorksPage() {
  return (
    <div className="works">
      <Header titlePage="Works" />
      <main>
        <SearchInput />
        <div className="row">
          <div className="slider">
            <div className="row__posters" id="row_pst">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>

        </div>
      </main>
      {/*


       <div className="cardsList">
        <div className="navigate left" onClick={handleLeftArrow}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 45L22.5 30L37.5 15"
              stroke="#FEFEFE"
              stroke-width="4"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="list-area">
          <div
            className="slider"
            style={{
              marginLeft: scrollX,
              width: 1 * 300,
            }}
          >
            <div className="item">
              <img
                src="https://img.freepik.com/vetores-gratis/arquiteto-com-projeto-personagem-de-engenheiro-do-homem-vector-arquiteto-profissional-e-ilustracao-de-desenho-construcao-de-arquiteto-profissional-engenheiro-com-planta_53562-12037.jpg?size=626&ext=jpg"
                alt=""
              />
              <p>React . FrontEnd . Typescript</p>
            </div>
          </div>
        </div>
        <div className="navigate right" onClick={handleRightArrow}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 45L37.5 30L22.5 15"
              stroke="#FEFEFE"
              stroke-width="4"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div></div>
       */}
    </div>
  );
}
