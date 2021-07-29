import Header from "../../components/Header";
import "./styles.ts";
import SearchInput from "../../components/SearchInput";
import Card from "../../components/CardProject";
import { WorkMainContainer, WorksContainer } from "./styles";
import { listCards } from "../../services/List";

export default function WorksPage() {
  return (
    <WorksContainer>
      <Header titlePage="Works" />
      <WorkMainContainer>
        <SearchInput />
        <div className="row">
          <div className="slider">
            <div className="row__posters" id="row_pst">
              {listCards.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </WorkMainContainer>
    </WorksContainer>
  );
}
