import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Maps from './components/pages/Maps'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  state = {
    todos: [
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/dnd-maps" component={Home}/>
          <Route path="/dnd-maps/citia" component={Maps}/>

      </div>
      </Router>
      
    );
  }
}

export default App;
