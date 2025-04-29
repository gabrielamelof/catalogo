import estilos from "./Footer.module.css";

// Criação do componente footer que está presente em todas as páginas da aplicação
export function Footer(){
    return(
        <footer className={estilos.container}>
            <h1>GabiFlix</h1>
            <h2>Os melhores filmes e séries!</h2>
        </footer>
    )
}
