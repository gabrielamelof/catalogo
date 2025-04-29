import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";
import estilos from './Lista.module.css'

const API_URL  = 'https://api.themoviedb.org/3';
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Lista(){
    const [movies, setMovies] = useState([])
    const[SelectedMovie, setSelectedMovie] = useState(null)

    // () parâmetros // {} script de programação // dependencias []
    useEffect(() =>{
        // Usa a chave da api para exibir a lista de filmes populares
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
        .then(response =>{
            console.log(response.data.results)
            setMovies(response.data.results)
        })
        // Mostra mensagem de erro no console caso a aplicação não funcione como deveria
        .catch(error =>{
            console.log('erro', error)
        });
  
    }, []);

    // Quando clicado, o filme escolhido é exibido no modal 
    const  handleOpenModal = (movie)=>{
        setSelectedMovie(movie);
    }
    // Define o filme escolhido como nulo quando o modal é fechado
    const handleCloseModal = (movie) =>{
        setSelectedMovie(null);
    }

    return(
        <div className={estilos.container}>
            <figure>
                {movies.map(movie=>(
                    <Card key={movie.id}
                        movie={movie}
                        onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {SelectedMovie && (<Modal movie={SelectedMovie} onClose={handleCloseModal}/>)}
        </div>
    )

}