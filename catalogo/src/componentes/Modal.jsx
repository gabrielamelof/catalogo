import estilos from './Modal.module.css';

export function Modal({movie, onClose}){
    // retorna nulo se !movie = True 
    if(!movie){
        return null;
    }
    // mostra o filme no console
    console.log(movie);

    // Estruturação e elementos apresentados no modal
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