import React from 'react'
import PokemonCard from './PokemonCard'
import {fetchPokeData} from '../actions'
import {connect} from 'react-redux'
import api from '../api/api'
class PokemonList extends React.Component {
    componentDidMount() {
        this
            .props
            .fetchPokeData()
    }
    filterPok = () => {
        return this
            .props
            .PokeMonList
            .filter(pokemon => pokemon.name.includes(this.props.storeUserPoke))
    }

    renderPokemonList = () => {

        return this
            .filterPok()
            .map(({url, name}) => {

                const index = (url.split('https://pokeapi.co/api/v2/pokemon/'))[1].split('/')

                return <PokemonCard name={name} key={url} index={index[0]}/>
            })
    }
    render() {
        return <div className="row">{this.renderPokemonList()}</div>
    }
}
const mapStateToProps = (state, ownProps) => {

    return {PokeMonList: state.fetchDataPoke, storeUserPoke: state.storeUserPoke}
}

export default connect(mapStateToProps, {fetchPokeData})(PokemonList)