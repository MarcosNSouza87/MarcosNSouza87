import Header from "../../components/Header";
import "./styles.ts";
import SearchInput from "../../components/SearchInput";
import { WorkMainContainer, WorksContainer } from "./styles";
import { listCards } from "../../services/List";
import {  useState } from "react";
import { CardList } from "../../components/CardList";

export default function WorksPage() {
  const [query, setQuery] = useState("");

  return (
    <WorksContainer>
      <Header titlePage="Works" />
      <WorkMainContainer>
        <SearchInput onChangeInput={setQuery}/>
        <div className="row">
          <div className="slider">
            <div className="row__posters" id="row_pst">
              <CardList cards={listCards} query={query} />
            </div>
          </div>
        </div>
      </WorkMainContainer>
    </WorksContainer>
  );
}
