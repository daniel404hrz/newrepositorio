const initialState = {
    myFavorites: [],
    allCharacters:[]
  };

const reducer=(state = initialState, action) =>{
    switch(action.type){
        case 'FILTER':
            if(action.payload === 'Todos'){
                return{...state, myFavorites:[...state.allCharacters] }
            }
            else  return {...state, myFavorites:state.allCharacters.filter((charr)=> charr.gender === action.payload)}
           
        case 'ORDER':
            if(action.payload === 'Ascendente'){
                return {...state, myFavorites:[...state.myFavorites].sort((a,b)=> a.id -b.id)}
            }else if(action.payload === 'Descendente'){
                return {...state, myFavorites:[...state.myFavorites].sort((a,b)=> b.id - a.id)}
            }
            return state;

            case 'GET_FAVORITES':
                return { ...state, myFavorites:action.payload, allCharacters:action.payload}
        default:
            return {...state}
        
    }
}
export default reducer