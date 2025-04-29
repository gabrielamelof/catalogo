import { Inicial } from '../Paginas/Inicial';
import {Routes, Route} from 'react-router-dom';
import { Perfil } from '../Paginas/Perfil';
import { Lista } from '../componentes/Lista';
import { Lista_Series } from '../componentes/Serie/Lista_Series';

// definição de rotas usadas para o acesso de cada página
export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route index element = {<Lista/>}/>
                <Route path='perfil' element={<Perfil/>}/>
                <Route path='series' element={<Lista_Series/>}/> 
            </Route>
        </Routes>
    );
}