import React,{Component} from "react";
import landing from "../assets/landing.jpg";
import "./home.css";
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            link:""
        }
    }
 
    render(){
        return(
        <div className="landingcont">
<img className="landingbg" alt="landing" src={landing}></img>
        </div>
        )
    }
}