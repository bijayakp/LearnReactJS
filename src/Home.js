import React from "react";
class Home extends React.Component{
    constructor(){
        super();
        console.log('constructor of the class')
    }
    Increase_fn = () =>{
      
    }

    Decrease_fn = () =>{
        alert("Clicked");
    }

    state = {
        increase: false,
        decrease:false
    }

    render(){
        return(
            <div>
            <div>Bijaya Kumar Pathia</div>
            <button onClick={this.Increase_fn}>Increase</button>
            <button onClick={this.Decrease_fn}>Decrease</button>
            </div>
        ) 
    }

   
  
}

export default Home;