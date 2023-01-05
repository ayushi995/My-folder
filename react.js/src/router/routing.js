import React from 'react';
import { Routes, Route} from "react-router-dom";
import About from '../pages/about/index';
import Home from '../pages/home/index';


class Rounting extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        name : "Ayushi",
        lastname: "Tyagi"
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
