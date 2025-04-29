import axios from "axios";
import React, {useState, useEffect} from "react";
// import { Card } from "./Card";
import { Modal_Series } from "./Modal_Series";
import estilos from './Lista_Series.module.css'
import { Card_Series } from "./Card_Series";

// Chave e Url da API 
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';
 
export function Lista_Series() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);
 

    // usa a chave da API e URL como parâmetros e retorna as series contidas na lista de séries populares
    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
        // Mostra os resultados obtidos 
        .then(response =>{
            console.log(response.data.results)
            setSeries(response.data.results)
        })
        // Mensagem de erro caso a conexão com a API não funcione como o esperado
        .catch(error =>{
            console.log('erro', error)
        });
  
    }, []);

    // Abre o modal com a série selecionada
    const  handleOpenModal = (series)=>{
        setSelectedSerie(series);
    }
    // Fecha o modal
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
