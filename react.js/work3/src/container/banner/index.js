import React from 'react';
import './index.css';

class Banner extends React.Component {
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
    const image = this.props.image;
    return (
      <div>
        <img src={image} alt="" />
      </div>
    )
  }
}

export default Banner;
