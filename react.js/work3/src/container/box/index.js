import React from 'react';
import './index.css';

class Box extends React.Component {
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
    console.log(this.props);
    const item = this.props.item;
    return (
        <div className='boxs'>
            <div className='img'>
            <img src={item.avatar} alt="" />
            </div>
            <div className='box_cont'>
                <h3>{item.first_name} {item.last_name}</h3>
                <p>{item.email}</p>
            </div>
        </div>
    ) 
  }
}

export default Box;
