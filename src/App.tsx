import { BrowserRouter, Route, Switch } from "react-router-dom";
import Background from "./assets/images/BackgroundApp";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
// import WorksPage from "./pages/Works";
import "./styles/global.ts";



export function App() {
  return (
    <BrowserRouter>
      <Sidebar behance="marcosnunes16"  github="MarcosNSouza87" linkedin="marcosnsouza/"/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/about" exact component={AboutPage} />
        <Route path="/works" exact component={WorksPage} /> */}
      </Switch>
    </BrowserRouter>
  );

  // const [dark, setDark] = useState(false);
  // return (
  //   <div className={`homepage ${dark ? "dark" : ""}`}>

  //   </div>
  // );
}
