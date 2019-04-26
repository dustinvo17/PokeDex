import React from 'react'
import PokeHome from './PokeHome'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CardDetails from './CardDetails'

class App extends React.Component {
    render(){
        return (
            <div>
                <Router >
                    <Switch>
                    <Route path='/' exact component={PokeHome}/>
                    <Route path='/pokemon/:id' exact component={CardDetails}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default App