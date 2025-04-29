import estilo from './Card_Series.module.css';


export function Card_Series( { serie, onOpenModal }){
    return(
    <div className={estilo.container}>
        <h3>{serie.name}</h3>
        {/* caminho para a imagem com o poster da serie */}
        <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}onClick={()=>onOpenModal(serie)}/>
    </div>
    
    );
}