import { useSelector } from 'react-redux';
import styled from './Favorites.module.css'
import Cards from '../Cards/Cards';
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
export default function Favorites(){
const characters= useSelector(state => state.myFavorites);
const dispatch = useDispatch();

const OrderDispatch =(event)=>{
    dispatch(orderCards(event.target.value))
}
const FilterDispatch =(event)=>{
    dispatch(filterCards(event.target.value))
}
    
    return(
        
        <div className={styled.caja}>
            <div className={styled.buttons}>
            
            <select onChange={OrderDispatch} className={styled.Distribucion}>
              <option value='Ascendente'>Ascendente</option>
              <option value='Descendente'>Descendente</option>
            </select>
           
            <select onChange={FilterDispatch} className={styled.Genero}>
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



  