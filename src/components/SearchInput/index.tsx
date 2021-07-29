import IconSearch from "../../assets/icons/IconSearch";
import { SearchInputContainer } from "./styles";
import "./styles.ts";

export default function SearchInput() {
  return (
    <SearchInputContainer>
      <div>
        <IconSearch color="#FEFEFE" />
        <input
          type="search"
          placeholder="Pesquise por titulo, ou tecnologia aqui.."
        />
      </div>
    </SearchInputContainer>
  );
}
