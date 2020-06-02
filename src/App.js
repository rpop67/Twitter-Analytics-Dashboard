import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navBar';


class App extends Component {
  state = {  };

  render() { 
    return ( 
      <React.Fragment>
        <NavBar className="navClass"/>
      </React.Fragment>
     );
  }
}
 
export default App;


