import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import estilos from './Detail.module.css'

export default function About (){

    const { detailId} = useParams();
    const [character, setCharacter] = useState({})
useEffect(() => {
    const URL_BASE = "http://localhost:3001/rickandmorty/detail/";
    // const KEY = "ddef674c82c7.55d441cc5b2898aeb0fb";

    fetch(`${URL_BASE}${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      
    
  }, [detailId]);

    return (
        <div className={estilos.caja} >
        {character.name ? (
          <div className={estilos.caja_elements}>
            <div className={estilos.elements_text}>
              <h2>{character.name}</h2> 
              <p>Status: {character.status}</p>
              <p>Specie: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin?.name}</p>
            </div>
            
            <div className={estilos.caja_img}>
              <img src={character.image} alt={character.name}/>
            </div>
            </div>
        ) : (
          <img className={estilos.caja_gif} src='https://art.pixilart.com/ca55d1f91b2cb0d.gif'alt='Loading'/>
        )}
      </div>
    )
}