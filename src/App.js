import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PlayerList from './components/playerlist/PlayerList';
import Player from './views/player/Player';
import Team from './views/team/Team';
import Teams from './views/teams/Teams';

function App() {
  return (
    <div className="App">
      <header className="App-header">Head Dur</header>
      <BrowserRouter>
        <Switch>
          <Route path="/players/:id" component={Player} />
          <Route path="/players" component={PlayerList} />
          <Route path="/teams/:id" component={Team} />
          <Route path="/teams" component={Teams} />
          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
