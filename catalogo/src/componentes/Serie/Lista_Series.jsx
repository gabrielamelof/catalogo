import axios from "axios";
import React, {useState, useEffect} from "react";
// import { Card } from "./Card";
import { Modal_Series } from "./Modal_Series";
import estilos from './Lista_Series.module.css'
import { Card_Series } from "./Card_Series";


const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';
 
export function Lista_Series() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);
 
    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
        .then(response =>{
            console.log(response.data.results)
            setSeries(response.data.results)
        })
        .catch(error =>{
            console.log('erro', error)
        });
  
    }, []);

    const  handleOpenModal = (series)=>{
        setSelectedSerie(series);
    }
    const handleCloseModal = (series) =>{
        setSelectedSerie(null);
    }

    return(
        <div className={estilos.container}>
            <figure>
                {series.map(serie=>(
                    <Card_Series key={serie.id}
                        serie={serie}
                        onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {selectedSerie && (<Modal_Series serie={selectedSerie} onClose={handleCloseModal}/>)}
        </div>
    )

}
    // const API_URL  = 'https://api.themoviedb.org/3';
// const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

// export function Lista(){
//     const [movies, setMovies] = useState([])
//     const[SelectedMovie, setSelectedMovie] = useState(null)

//     // () parâmetros // {} script de programação // dependencias []