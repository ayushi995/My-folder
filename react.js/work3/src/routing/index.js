import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from '../pages/home/index';
import About from '../pages/about/index';

class Rounting extends React.Component {
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
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
        </Routes>
      </div>
    ) 
  }
}

export default Rounting;
