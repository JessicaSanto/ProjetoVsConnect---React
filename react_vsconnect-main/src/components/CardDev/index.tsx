import "./style.css"

export default function CardDev(props: any) {

    return (
        <div className="dev">
            <div className="grupo_contato">
                <img src={props.foto} alt="" />
                <div className="contato_dev">
                    <h3>{ props.nome }</h3>
                    <p>{ props.email }</p>
                </div>
            </div>
            <div className="techs">
            {
                props.techs.map((tech: string, index: number) => {
                    return <span key={index}>{tech}</span>
                })
            }
            </div>
        </div>
    )
}