import api from '../api/api'
export const findPoke =  (userSearch) =>{
    return {
        type:"SEARCH",
        payload:userSearch
    }
}

export const fetchPokeData = ()=> async(dispatch,getState) => {
    const response = await api.get('/pokemon')
    dispatch({type:"FETCH_POKEMON",payload:response.data.results})

}

export const pokemonDetail =  (id) => async(dispatch,getState) =>{
    const response = await api.get(`/pokemon/${id}`)
    dispatch({type:"DETAIL",payload:response.data})
}
