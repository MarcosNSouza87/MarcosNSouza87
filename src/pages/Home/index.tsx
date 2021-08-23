import Header from "../../components/Header";
import About from "../About";
import WorksPage from "../Works";
import { HomeMainContent, HomePageContainer } from "./styles";
import "./styles.ts";

export default function HomePage() {
  return (
    <HomePageContainer>
      <Header titlePage="Portfolio" subTitlePage=""/>
      <HomeMainContent>
        <About />
        <WorksPage />
      </HomeMainContent>
    </HomePageContainer>
  );
}
