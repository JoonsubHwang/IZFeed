import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import News from './News';
import Gallery from './Gallery';
import SocialMedia from './SocialMedia';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => (
        <Homepage />
      )} />
      <Route exact path='/news' render={() => (
        <News />
      )} />
      <Route exact path='/gallery' render={() => (
        <Gallery />
      )} />
      <Route exact path='/social-media' render={() => (
        <SocialMedia />
      )} />
      <Route render={() => (
        <h1>Not Found</h1>
      )}/>
    </Switch>
  );
}

export default App;
