import React from "react";
import Header from "../../components/HeaderNav";
import { HomeMainContent, HomePageContainer } from "./styles";
import * as Section from "./Sections"
import "./styles.ts";

export default function HomePage() {
  const [selectedSection, setSelectedSection] = React.useState("Home");
  return (
    <HomePageContainer>
      <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
      <HomeMainContent>
        {selectedSection === "Home" && <Section.Home />}
        {selectedSection === "About" && <Section.About />}
        {selectedSection === "Experience" && <Section.Experience />}
        {selectedSection === "ContactMe" && <Section.ContactMe />}
        {selectedSection === "Projects" && <Section.Projects />}
      </HomeMainContent>
    </HomePageContainer>
  );
}
