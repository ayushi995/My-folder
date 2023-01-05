import React from 'react';
import { Link } from "react-router-dom";
import Banner from '../../container/banner/index';
import Box from '../../container/box/index';
import './index.css';
import imageone from '../../assets/images/banner.jpg';
import Bannertwo from '../../assets/images/bannerone.png';





class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      fetchdata:{},
      data:[]
    }
  }

  componentDidMount(){
   fetch('https://reqres.in/api/users?page=1')
   .then(resp => resp.json())
   .then(result => {
    this.setState({fetchdata : result});
    this.setState({data:result.data})
   }) 
   .catch(error => {
      console.log(error)
   })

  }

  render(){
   // console.log(this.state.data);
    return (
      <div className='wrapper_list'>
        {
          this.state.data.length > 0 ?
          this.state.data.map((item, index) => {
            return(
              <Link to={'/about/'+item.id} key={index+1}>
                <Box item={item} />
              </Link>
            )
          }) 
          : "No data found"
        }
            <div>Welcome Home</div>
            <Banner image={imageone} />
            <Banner image={Bannertwo} />
      </div>
      
    ) 
  }
}

export default Home;
