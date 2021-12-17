import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Players from './views/players/Players';
import Player from './views/player/Player';
import Team from './views/team/Team';
import Teams from './views/teams/Teams';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          Head Dur
          <NavLink className="App-link" to="/">
            Home
          </NavLink>
          <NavLink className="App-link" to="/teams">
            Teams
          </NavLink>
          <NavLink className="App-link" to="/players">
            Players
          </NavLink>
        </header>
        <Switch>
          <Route path="/players/:id" component={Player} />
          <Route path="/players" component={Players} />
          <Route path="/teams/:id" component={Team} />
          <Route path="/teams" component={Teams} />
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
