import React from 'react'
import {Link} from 'react-router-dom'

class PokemonCard extends React.Component {
  
    render() {
       console.log(this.props.image)
        return (
            <div className="col-6 col-md-4 card">
            <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png`}/>
             <div className="card-body">
                <h5 className="card-title">{this.props.index}</h5>
                <p className="card-text">{this.props.name.toUpperCase()}</p>
                <Link to={`/pokemon/${this.props.index}`} className="btn btn-success">Read More</Link>
             </div>
            
            </div>
        )

    }

}

export default PokemonCard