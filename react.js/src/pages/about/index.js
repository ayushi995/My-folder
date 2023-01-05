import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';


const withHoc = Component => props => {
  const params = useParams();
  return <Component {...props} params={params} />;
};

class About extends React.Component {
  constructor(props){
      super(props);
      console.log(props);
      this.state = {
        params : props.params.id,
        data : {}
      }
    }  

  componentDidMount(){
    fetch('https://reqres.in/api/users/'+this.state.params)
    .then(resp => resp.json())
    .then(result => {
     this.setState({data : result.data});
    }) 
    .catch(error => {
       console.log(error)
    })
  }

  render(){
    console.log(this.state.data);
    return (
      <div>Welcome About
        
      </div>
    ) 
  }
}

export default withHoc(About);
