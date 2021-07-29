import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
// import WorksPage from "./pages/Works";
import "./styles/global.scss";

export function App() {
  return (
    <BrowserRouter>
      <Sidebar />
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
