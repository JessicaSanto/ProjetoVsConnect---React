import { useState } from "react";
import CardDev from "../../components/CardDev";
import "./style.css";

type root<b = undefined | string> = {
  hireable?: b;
};
interface Value<s> extends root {
  // "s" significa string , mas eu apenas quero definir meu tipo
  // quando ele ele é nescessario.
  img_perfil: s;
  nome: s;
  email: s;
  skills: s[];
}

export default function ListaDevs() {
  const [devs, setDevs] = useState<Value<string>[]>([
    {
      img_perfil:
        "https://i.pinimg.com/236x/ed/dc/8a/eddc8a518978cd3b749d69dbc5f535e1.jpg",
      nome: "Thiago Nascimento",
      email: "thiago@email.com",
      skills: ["HTML", "CSS", "REACT"],
    },
    {
      img_perfil:
        "https://linkconnection.com.br/wp-content/uploads/2023/02/fotos-para-perfil-922x1024.jpg",
      nome: "Jessica Franzon",
      email: "jessica@email.com",
      skills: ["HTML", "CSS", "REACT"],
    },
    {
      img_perfil:
        "https://i.pinimg.com/236x/a6/f2/53/a6f25369334938bc1a3efe14f1f3d229.jpg",
      nome: "Odirlei Sabella",
      email: "odirlei@email.com",
      skills: ["HTML", "CSS", "ANGULAR"],
    },
    {
      img_perfil:
        "https://i.pinimg.com/236x/37/01/e7/3701e763f6ded4234b68d8fac1a9fa85.jpg",
      nome: "Aléxia Vitória",
      email: "alexia@email.com",
      skills: ["PYTHON", "VUE", "REACT"],
    },
  ]);

  const [skillDigitada, setSkillDigitada] = useState<string>("");
  const [listDevsFiltrados, setListaDevsFiltrados] =
    useState<Value<string>[]>(devs);

  function buscarPorSkills(event: any): void {
    event.preventDefault();

    const devsFiltrados = devs.filter((dev: Value<string>): boolean =>
      dev.skills.includes(skillDigitada.toLocaleUpperCase())
    );

    if (typeof devsFiltrados == "string") alert("alert !!! ");

    return setListaDevsFiltrados(devsFiltrados);
  }

  function retornoDevsGeral(event: any) {
    if (event.target.value === "") {
      setListaDevsFiltrados(devs);
    }

    setSkillDigitada(event.target);
  }

  return (
    <main id="lista-devs">
      <div className="container container_lista_devs">
        <div className="lista_devs_conteudo">
          <h1>Lista de Devs</h1>
          <hr />
          <form method="post" onSubmit={buscarPorSkills}>
            <div className="wrapper_form">
              <label htmlFor="busca">Procurar desenvolvedores</label>
              <div className="campo-label">
                <input
                  type="search"
                  name="campo-busca"
                  id="busca"
                  placeholder="Buscar desenvolvedores por tecnologias..."
                  onChange={retornoDevsGeral}
                />
                <button type="submit">Buscar</button>
              </div>
            </div>
          </form>
          <div className="wrapper_lista">
            <ul>
              {listDevsFiltrados.map((dev: Value<string>, index: number) => {
                return (
                  <li>
                    <CardDev
                      foto={dev.img_perfil}
                      nome={dev.nome}
                      email={dev.email}
                      tecnologias={dev.skills}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
