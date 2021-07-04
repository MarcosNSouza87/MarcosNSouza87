import { useEffect, useState } from "react";

export function App() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    async function getUserRepo(username: string) {
      const resp = await fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((response) => {
          return response;
        });
      setRepo(resp);
      return resp;
    }
    getUserRepo("MarcosNSouza87");
  }, [repo]);
  return (
    <div className="homepage">
      <aside>
        <div className="card">
          <img
            src="https://avatars.githubusercontent.com/u/31523870?v=4"
            width="100"
            alt=""
          />
          <div className="name">Marcos Nunes de Souza</div>
          <div className="function">Desenvolvedor Web</div>

          <div className="social-media"></div>
        </div>
      </aside>
      <main>
        <header>
          <ul>
            <li>Portugues</li>
            <li>Ingles</li>
          </ul>
        </header>
        <section className="presentation">
          Olá! <br />
          Meu nome é <br />
          <span>Marcos</span>
          e sou <br />
          desenvolvedor web
        </section>
        <section className="projects">
          <div>Projetos</div>
          <ul className="list-repo">
            {repo.map((rep: any) => (
              <li key={rep.id}>
                <img
                  src={`https://raw.githubusercontent.com/${rep.owner.login}/${rep.name}/master/imgbrand.svg`}
                  alt=""
                />
                <div>{rep.name}</div>
                <div>{rep.description}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
