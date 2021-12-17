import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Head Dur</header>
      <BrowserRouter>
        <Switch>
          <Route path="/players/:id" />
          <Route path="/players" />
          <Route path="/teams/:id" />
          <Route path="/teams" />
          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
