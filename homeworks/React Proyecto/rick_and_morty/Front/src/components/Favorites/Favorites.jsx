import { useDispatch, useSelector } from 'react-redux';
import styled from './Favorites.module.css'
import Cards from '../Cards/Cards';
import { agregarFavorito, filterCards, orderCards } from '../../redux/actions';
import { useEffect } from 'react';

export default function Favorites(){
    const dispatch = useDispatch();

  
const characters= useSelector(state => state.myFavorites);
const OrderDispatch =(event)=>{
    dispatch(orderCards(event.target.value))
}
const FilterDispatch =(event)=>{
    dispatch(filterCards(event.target.value))
}
useEffect(() => {
    dispatch(agregarFavorito());
  }, [dispatch]);
    return(
        <div className={styled.caja}>
            <div className={styled.buttons}>
            
            <select onChange={OrderDispatch} className={styled.Distribucion}>
              <option value='Ascendente'>Ascendente</option>
              <option value='Descendente'>Descendente</option>
            </select>
           
            <select onChange={FilterDispatch} className={styled.Genero}>
                <option value='Todos'>Todos</option>
                <option value='Genderless'>Genderless</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='unknown'>unknown</option>

            </select>
            </div>
            
            <Cards characters={characters}/> 
        </div>
    )
}



  