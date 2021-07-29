import { useState } from "react";
import IconThemeDark from "../../../assets/icons/IconThemeDark";
import {IconThemeLight} from "../../../assets/icons/IconThemeLight";

import "./styles.scss";

type ButtonThemeProps = {
  theme: boolean;
  //  setTheme(value:boolean):void;
};

export default function ButtonTheme(props: ButtonThemeProps) {
  const [dark, setDark] = useState(false);
  return (
    <button
      onClick={() => {
        setDark(prev => !prev);
      }}
    >
      {dark ? <IconThemeLight color="#fefefe" /> : <IconThemeDark color="#7a7a7a" />}
    </button>
  );
}
