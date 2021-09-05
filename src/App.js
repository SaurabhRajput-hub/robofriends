import React from "react";
import CardList from "./CardList";
import Searchbox from './Searchbox';
import {robots} from './robots'
import './App.css'

class App extends React.Component{
constructor(){
    super();
    this.state={
        robots: robots,
        searchfield:''
    };
}

OnSearchChanged = (event) => {
    this.setState({searchfield: event.target.value});
}    

render(){    
    const filterRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return(
    <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <Searchbox searchChange={this.OnSearchChanged}/>
        <CardList robots={filterRobots}/>

    </div>  
   );
}
}

export default App