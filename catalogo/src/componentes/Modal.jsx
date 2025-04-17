import estilos from './Modal.module.css';

export function Modal({movie, onClose}){
    if(!movie){
        return null;
    }
    console.log(movie);

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.ModalHeader} >
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>x</button>
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}alt="" />
                    <div className={estilos.movieDetails}>
                        <ul>
                            <li>{`Popularidade: ${movie.popularity}`}</li>
                            <li>{`Data de Lançamento: ${movie.release_date}`}</li>
                            <li>{`Quantidade de votos: ${movie.vote_count}`}</li>
                            <li className={estilos.sinopse} >{`Sinopse do filme: ${movie.overview}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}