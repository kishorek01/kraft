import React,{Component} from 'react';
import './App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Shortner from "./gblinks/shortner";
import Home from './homepage/home';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      status:""
    }
  }
  render(){
  return (
    <div>
      <BrowserRouter>
 <Routes>
 <Route exact path="/" element={<Home />} />

        <Route exact path="/url-shortner" element={<Shortner />} />
      </Routes>
      </BrowserRouter>
      </div>
  );
  }
}

export default App;
