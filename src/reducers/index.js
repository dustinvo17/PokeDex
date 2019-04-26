import {combineReducers} from 'redux'

const storeUserPoke = (state=[], action)=>{
    switch (action.type){
        case 'SEARCH':
            return action.payload
        default:
            return state
    }
}
const fetchDataPoke = (state=[],action)=>{
    switch (action.type){
        case "FETCH_POKEMON":
            return action.payload
        default:
            return state
    }
}
const fetchDetail = (state=[],action)=>{
    switch (action.type){
        case "DETAIL":
            return action.payload
        default:
            return state
    }
}
export default combineReducers({
    storeUserPoke:storeUserPoke,
    fetchDataPoke:fetchDataPoke,
    fetchDetail:fetchDetail
  
})