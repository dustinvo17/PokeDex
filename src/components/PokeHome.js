import React from 'react'
import Nav from '../layout/Nav'
import SearchPokemon from './SearchPokemon'
import PokemonList from './PokemonList'
class PokeHome extends React.Component {
    render(){
        return (
            <div>
                
                <Nav/>
                <SearchPokemon/>
                <div className="container">
                    <PokemonList/>
                </div>
               
            </div>
        )
    }
}
export default PokeHome