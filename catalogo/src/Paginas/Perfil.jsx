import estilos from './Perfil.module.css';
import foto from '../assets/foto.svg';
import newgirl from '../assets/newgirl.svg';
import pll from '../assets/pll.svg';
import succession from '../assets/succession.svg';
import lalaland from '../assets/lalaland.svg';
import inthemoodforlove from '../assets/moodforlove.svg';
import greatestshowman from '../assets/reidoshow.svg';


export function Perfil(){
    return(
        <main className={estilos.container}>
            <h1 className={estilos.titulo}>Meu Perfil</h1>
            <section className={estilos.principal}>
                <div className={estilos.containerfoto}>
                    <img className={estilos.foto} src={foto} alt="" />
                </div>
                 

                <div className={estilos.info}>
                    <h1>Gabriela Melo</h1>
                    <p>Idade: 19 anos</p>
                    <p>Séries assistidas: 25</p>
                    <p>Filmes Assistidos: 230</p>
                    <p>Último filme assistido: Conclave</p>
                </div>
            

            </section>

                <h1 className={estilos.titulo}> Séries Favoritas</h1>
                <section className={estilos.filmes}>
                    <img className={estilos.poster} src={pll} alt="" />
                    <img className={estilos.poster} src={newgirl} alt="" />
                    <img className={estilos.poster} src={succession} alt="" />
                </section>

                <h1 className={estilos.titulo}> Filmes Favoritas</h1>
                <section className={estilos.series}>
                    <img className={estilos.poster} src={lalaland} alt="" />
                    <img className={estilos.poster} src={inthemoodforlove} alt="" />
                    <img className={estilos.poster} src={greatestshowman} alt="" />
                </section>
           
        </main>
    );
}