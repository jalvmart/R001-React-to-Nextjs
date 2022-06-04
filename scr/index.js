const app = document.getElementById("app")

function Header({ title }) {
    return <h1>{title ? title : "Default title"}</h1>
}

function HomePage() {
    const skills = ["HTML", "CSS", "JavaScript"]
    
    const [likes, setLikes] = React.useState(0)

    function handleClick(){
        setLikes(likes + 1)
    }

    return (
        <div>
            <Header title="Aprende React" />
            <p>
                React es una biblioteca de JavaScript basada en componentes.
                Sirve para crear eficientes interfaces de usuario (UI).
            </p>
            <p>
                Para utilizar la biblioteca de React es recomendable dominar:
            </p>
            <ul>
                {skills.map((sk) =>
                    <li key={sk}>{sk}</li>
                )}
            </ul>         
            <button onClick={handleClick}>Me Gusta ({likes})</button>
        </div>
    )
}

ReactDOM.render(<HomePage />, app)
