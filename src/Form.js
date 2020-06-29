import React,{Component} from 'react'
import axios from 'axios';
import './Form.css';

class Form extends Component{
    state = { userName: ''}
    handleSubmit = async (event) =>{
      event.preventDefault();
      try{
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
      }catch(e){
          const {response} = e;
          const {request, ...errorObject} = response
          alert(this.state.userName+"does not exist on GitHub")
          console.log(this.state.userName,errorObject.data.message)
      }finally{
          console.log("Continuing....")
      }
    }
    render(){
      return(
        <form className="form" style={{float: "left",width: '100%'}} onSubmit={this.handleSubmit}>
          <input type="text" placeHolder="GitHub Username" onChange={(event) => this.setState({userName:event.target.value})} required/>
          <button>Fetch</button>
        </form>
      )
    }
  }
export default Form;