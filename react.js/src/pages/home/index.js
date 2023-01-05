import React from 'react';
import Navbar from '../../container/header/index';
import Contentpart from '../../container/contentpart/index';

import './index.css';

class Home extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data : {}
      }
    }  

  componentDidMount(){
  }

  render(){
    console.log(this.state.data);
    return (
      <div>
            <Navbar />
            <Contentpart />
      </div>
    ) 
  }
}

export default Home;
