import { useState } from "react";
import IconThemeDark from "../../../assets/icons/IconThemeDark";
import { IconThemeLight } from "../../../assets/icons/IconThemeLight";
import { ButtonThemeContainer } from "./styles";
import "./styles.ts";

interface ButtonThemeProps{
  setTheme(theme:boolean):void;
}

export default function ButtonTheme(props:ButtonThemeProps) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark((prev) => !prev);
    props.setTheme(!dark);
  }
  return (
    <ButtonThemeContainer
      onClick={() => toggleTheme()}
    >
      {dark ? (
        <IconThemeDark color="" />
      ) : (
        <IconThemeLight color="" />
      )}
    </ButtonThemeContainer>
  );
}
