import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { connect , useDispatch} from "react-redux";
import styled from './Card.module.css';
import { useLocation } from "react-router-dom";
import { agregarFavorito} from "../../redux/actions";
import axios from "axios";

function Card({characters, id,name,species,gender,image,onClose}) {
   const dispatch = useDispatch();
   const[isFav, setIsFav] = useState(false)

   const addFavorite = (character) => {
      axios
        .post("http://localhost:3001/rickandmorty/fav", character)
        .then((res) => console.log("ok"));
    };
  
    const removeFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch(agregarFavorito());
    };
  
    const handleFavorite = () => {
      if (isFav) {
        setIsFav(false);
        removeFavorite(id);
      } else {
        setIsFav(true);
        //
        addFavorite({
          id,
          name,
          species,
          gender,
          image,
        });
      }
    };
   useEffect(() => {
      characters.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
            
         }
      });
      

   }, [id, characters]);
   const {pathname} = useLocation()
   return (
      
      <div className={styled.caja_carta}>
         {isFav ? (
      <button className={styled.fav} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={styled.fav} onClick={handleFavorite}>🤍</button>)}

      { pathname !== '/favorites' && <button className={ styled.buttonX} onClick={()=>onClose(id)}>X</button>}
      
            <img src={image} alt={name} />

            {<Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            </Link>}
            
            <p>Especie: {species}</p>
            <p>Género: {gender}</p>
          </div>
);
}
const mapStateToProps = (state) => {
   return {
     characters: state.myFavorites,
   };
 };


export default connect(mapStateToProps)(Card);