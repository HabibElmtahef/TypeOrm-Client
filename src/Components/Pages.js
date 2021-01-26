import {Switch, Route} from 'react-router-dom'
import Games from './Games'
import CreateGame from './CreateGame'
import UpdateGame from './UpdateGame'
import GameDetail from './GameDetail'

function Pages() {
    return (
        <Switch>
           <Route path="/" exact component={Games} />
           <Route path="/create" exact component={CreateGame} />
           <Route path="/game/:id" exact component={UpdateGame} />
           <Route path="/detail/:id" exact component={GameDetail} />
        </Switch>
    )
}

export default Pages
