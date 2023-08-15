import "./style.css";

interface Techs<s> {
  markup: s;
  stilify: s;
}

const techs = {
  markup: "HTML",
  stilysh: "CSS",
  framework: "react",
};

export default function CardDev(props: any) {
  return (
    <div className="dev">
      <div className="grupo_contato">
        <img src={props.foto} alt="" />
        <div className="contato_dev">
          <h3>{props.nome}</h3>
          <p>{props.email}</p>
        </div>
      </div>
      <div className="techs">
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
      </div>
    </div>
  );
}
