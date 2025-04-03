import estilos from "./Barranavegacao.module.css";
export function Barranavegacao(){
    // Todo return só pode renderizar um componente
    return(
        <nav className={estilos.container}>
            <ul>
                <li>
                    <span class="material-symbols-outlined">home</span>
                    Home
                </li>

                <li>
                    <span class="material-symbols-outlined">live_tv</span>
                    Filme
                </li>

                <li>
                    <span class="material-symbols-outlined">person</span>
                    Perfil
                </li> 
            </ul>
            
        </nav>
    )
}
