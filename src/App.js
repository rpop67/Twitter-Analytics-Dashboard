import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navBar';
import Content from './Components/content'

class App extends Component {
  state = {  };

  render() { 
    return ( 
      <React.Fragment>
        <NavBar/>
        <main>
          <Content>
          </Content>          
        </main>

      </React.Fragment>
     );
  }
}
 
export default App;


