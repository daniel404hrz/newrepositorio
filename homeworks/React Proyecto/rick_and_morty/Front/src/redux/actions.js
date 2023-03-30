import axios from 'axios'

export const filterCards=(gender)=>{
    return {type:'FILTER',payload:gender}

}
export const orderCards=(id)=>{
    return {type:'ORDER', payload:id}

}
export const agregarFavorito= ()=>{
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
        dispatch({ type: 'GET_FAVORITES', payload: response.data });
    }
 }


