import estilos from "./Barranavegacao.module.css";
import { Link } from 'react-router-dom';

export function Barranavegacao(){
    // Todo return só pode renderizar um componente
    return(
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
