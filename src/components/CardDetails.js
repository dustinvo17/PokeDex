import React from 'react'
import Nav from '../layout/Nav'
import {connect} from 'react-redux'
import {pokemonDetail} from '../actions'
import {Link} from 'react-router-dom'

class CardDetails extends React.Component {

    componentDidMount() {

        this
            .props
            .pokemonDetail(this.props.match.params.id)

    }

    render() {
        console.log(this.props.detail)
        if (!this.props.detail) {
            return <div>Loading...</div>
        }

        const {name, height, weight} = this.props.detail
        return (

            <div >

                <Nav/>
                <div
                    className="card container"
                    style={{
                    height: '75vh'
                }}>

                    <img
                        className="card-img-top"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.match.params.id}.png`}
                        alt={name}/>
                    <div className="card-body">
                        <h1 className="card-title">{this.props.match.params.id}</h1>
                        <h5 className="card-title">{name
                                ? name.toUpperCase()
                                : 'NAME'}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Height: {height}</li>
                            <li className="list-group-item">Weight:{weight}</li>
                            <li className="list-group-item"><Link to="/" class="btn btn-success">Back To Pokemon List</Link></li>
                        </ul>
                            
                    </div>

                </div>

            </div>
        )
    }

}
const mapStateToProps = (state, ownProps) => {

    return {detail: state.fetchDetail}
}
export default connect(mapStateToProps, {pokemonDetail})(CardDetails)