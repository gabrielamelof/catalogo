import estilos from "./Barranavegacao.module.css"; // o nome estilos é definido e usado para chamá-lo no código mais tarde
import { Link } from 'react-router-dom';

// Função utilizada para a criação da barra de navegação que será importada nas páginas da aplicação 
//posteriormente
export function Barranavegacao(){
    // Todo return só pode renderizar um componente
    return(
        // Barra de navegação do site, com links para a página home, séries e perfil 
        <nav className={estilos.container}>
            <ul className={estilos.ul}>
                <Link className={estilos.Link} to='/'>
                    <li>
                        <span class="material-symbols-outlined">home</span>
                        Home
                    </li>
                </Link>
                
                <Link className={estilos.Link} to='series'>
                    <li >
                        <span class="material-symbols-outlined">live_tv</span>
                        Séries
                    </li>
                </Link>
                
                <Link className={estilos.Link} to='perfil'>
                    <li>
                        <span class="material-symbols-outlined">person</span>
                        Perfil
                    </li> 
                </Link>
                
            </ul>
            
        </nav>
    )
}
