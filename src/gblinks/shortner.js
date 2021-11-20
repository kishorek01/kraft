import React,{Component} from "react";
import axios from "axios";
export default class Shortner extends Component{
    constructor(props){
        super(props);
        this.state={
            link:""
        }
    }
    generatelink(){
        axios.get('https://gplinks.in/api?api=a92c63bd6b96da83e15aa88f2a1f8e8a8b980df9', {
            params: {
              url: this.state.link,
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
    }
    render(){
        return(
        <div style={{background:"black"}}>
        <input value={this.state.link} onChange={(e)=>{this.setState({link:e.target.value})}}></input>
        {this.state.link!=="" && <button onClick={()=>this.generatelink()}>Generate</button>}

        </div>
        )
    }
}