import Header from "../../components/Header";
import About from '../About'
import WorksPage from '../Works'
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <Header titlePage="Portfolio" />
      <main className="content">
        <About/>
        <WorksPage/>
      </main>
    </div>
  );
}
