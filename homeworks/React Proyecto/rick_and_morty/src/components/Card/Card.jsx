import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { connect , useDispatch} from "react-redux";
import { removePER, agregarPER } from "../../redux/actions";
import styled from './Card.module.css';
import { useLocation } from "react-router-dom";
function Card({characters, id,name,species,gender,image,onClose}) {

   const dispatch = useDispatch();
   const[isFav, setIsfav] = useState(false)

   const handleFavorite=()=>{
      if(isFav){
         setIsfav(false)
         dispatch(removePER(id))
      }else{
         setIsfav(true)
         dispatch(agregarPER(id))
      }
   }
   useEffect(() => {
      characters.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
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

const mapDispatchToProps=(dispatch)=>{
   return {
      agregarPER:(id)=>{
         dispatch(agregarPER(id))
      },
      removePER:(id)=>{
         dispatch(removePER(id))
      }
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);