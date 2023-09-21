import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/post"><Post /></Route>
          <Route path="/">
              <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
