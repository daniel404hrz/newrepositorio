const initialState = {
    myFavorites: [],
    allCharacters:[]
  };

const reducer=(state = initialState, action) =>{
    switch(action.type){
        case 'AGREGAR_PERSONA':
            return {...state, myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload],}
        case 'DELETE_PERSONA':
            return {...state, myFavorites:state.myFavorites.filter((charr)=> charr.id !== action.payload),
            }
        case 'FILTER':
            return {...state, myFavorites:state.allCharacters.filter((charr)=> charr.gender === action.payload)}
        case 'ORDER':
            if(action.payload === 'Ascendente'){
                return {...state, myFavorites:[...state.myFavorites].sort((a,b)=> a.id -b.id)}
            }else if(action.payload === 'Descendente'){
                return {...state, myFavorites:[...state.myFavorites].sort((a,b)=> b.id - a.id)}
            }
            return state;
        default:
            return {...state}
        
    }
}
export default reducer