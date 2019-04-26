import React from 'react'
import {findPoke} from '../actions/index'
import {connect} from  'react-redux'
const SearchPokemon = (props) => {
    
    return (
        
        <input onChange={(e) => props.findPoke(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Search Your Pokemon"
           />

    )
}
const  mapStateToProps = (state, ownProps) => {
   
    return {
        
    }
}
export default connect(mapStateToProps,{findPoke})( SearchPokemon)