import React from "react";
import Header from "../../components/Header";
import { HomeMainContent, HomePageContainer } from "./styles";
import * as Section from "./Sections"

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
        {selectedSection === "Projects" && <Section.Works />} 
      </HomeMainContent>
    </HomePageContainer>
  );
}
