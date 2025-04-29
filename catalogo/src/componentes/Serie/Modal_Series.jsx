import estilos from './Modal_Series.module.css';

export function Modal_Series({serie, onClose}){
    if(!serie){
        return null;
    }
    console.log(serie);

// Estrutura e criação do conteúdo do modal de séries
    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.ModalHeader} >
                    <h2>{serie.name}</h2>
                    <button onClick={onClose}>x</button>
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}alt="" />
                    <div className={estilos.seriesDetails}>
                        <ul>
                            <li>{`Popularidade: ${serie.popularity}`}</li>
                            <li>{`Data de Lançamento: ${serie.first_air_date}`}</li>
                            <li>{`Quantidade de votos: ${serie.vote_count}`}</li>
                            <li className={estilos.sinopse}>{`Sinopse do filme: ${serie.overview}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}