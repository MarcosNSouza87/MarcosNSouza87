import IconSearch from "../../assets/icons/IconSearch";
import { SearchInputContainer } from "./styles";
import "./styles.ts";

interface SearchIputProps {
  onChangeInput(search:string):void;

}


export default function SearchInput(props:SearchIputProps) {
  return (
    <SearchInputContainer>
      <div>
        <IconSearch color="" />
        <input
          onChange={(ev)=>props.onChangeInput(ev.target.value)}
          type="search"
          placeholder="Pesquise por titulo, ou tecnologia aqui.."
        />
      </div>
    </SearchInputContainer>
  );
}
