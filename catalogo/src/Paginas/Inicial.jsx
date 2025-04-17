import { Barranavegacao } from '../componentes/Barranavegacao';
import { Cabecalho } from '../componentes/Cabecalho';
import { Outlet } from 'react-router-dom';
import { Footer } from '../componentes/Footer';
import { Conteudo } from '../componentes/Conteudo';

export function Inicial(){
    return(
        <>
            <Cabecalho/>
            <Barranavegacao/>
            <Conteudo/>
            <Outlet/>
            <Footer/>
       </>
    )
}