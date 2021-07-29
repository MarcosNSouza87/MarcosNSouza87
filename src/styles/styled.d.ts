import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary:{
      primary:string;
      secondary:string;
      white:string;
      gray:string;
      dark:string;
    }
    secondary:{
      primary:string;
      secondary:string;
      white:string;
      gray:string;
      dark:string;
    }
  }
}
