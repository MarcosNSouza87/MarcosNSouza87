import { useState } from "react";
import IconThemeDark from "../../../assets/icons/IconThemeDark";
import { IconThemeLight } from "../../../assets/icons/IconThemeLight";
import { ButtonThemeContainer } from "./styles";

import "./styles.ts";

type ButtonThemeProps = {
  theme: boolean;
  //  setTheme(value:boolean):void;
};

export default function ButtonTheme(props: ButtonThemeProps) {
  const [dark, setDark] = useState(false);
  return (
    <ButtonThemeContainer
      onClick={() => {
        setDark((prev) => !prev);
      }}
    >
      {dark ? (
        <IconThemeDark color="" />
      ) : (
        <IconThemeLight color="" />
      )}
    </ButtonThemeContainer>
  );
}
