import Header from "../../components/HeaderNav";
import About from "./About";
import WorksPage from "./Works";
import { HomeMainContent, HomePageContainer } from "./styles";
import "./styles.ts";

export default function HomePage() {
  return (
    <HomePageContainer>
      <Header/>
      <HomeMainContent>
        <About />
        <WorksPage />
      </HomeMainContent>
    </HomePageContainer>
  );
}
