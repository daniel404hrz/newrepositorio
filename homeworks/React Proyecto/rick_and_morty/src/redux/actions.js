export const removePER =(id)=>{
    return {type:'DELETE_PERSONA', payload:id}
}
export const AGREGAR_PERSONA ='AGREGAR_PERSONA';

export const agregarPER = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "ddef674c82c7.55d441cc5b2898aeb0fb";
    return function (dispatch) {
        fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: AGREGAR_PERSONA, payload: data }));
    }}

export const filterCards=(gender)=>{
    return {type:'FILTER',payload:gender}

}
export const orderCards=(id)=>{
    return {type:'ORDER', payload:id}

}
