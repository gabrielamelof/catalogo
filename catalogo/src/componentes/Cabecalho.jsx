import estilos from "./Cabecalho.module.css";

// Estrutura básica para os componentes
export function Cabecalho(){
    return(
        <header className={estilos.container}>
            <h1>GabiFlix</h1>
            <h3>O melhor catálogo de filmes</h3>

        </header>
    )
}