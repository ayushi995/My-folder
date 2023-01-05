import React from 'react';
import Routing from './routing/index';
import './App.css';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        name : "kapil chauhan",
        isLogin:false
      }
    }  

  componentDidMount(){

  }

  render(){
    return (
      <div className="App">
        <Routing />
      </div>
    ) 
  }
}

export default App;
