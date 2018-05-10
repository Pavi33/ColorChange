import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props, context)
    {
        
        super(props, context);
        this.state ={
            color: "",
            bgColor: "white"
        };
    }
    colorValue = (e) =>{ this.setState({ color: e.target.value});}
    setNewColor =(e) => { 
        this.setState({bgColor: this.state.color}); 
        e.preventDefault();
     this._input.focus();
      this._input.value="";
    }
    
  render() {
      var squareStyle= {
          backgroundColor: this.state.bgColor
      }
     
      
    return (
      <div className="App">
        <div style= {squareStyle} className="App-square"></div>
        <form onSubmit={this.setNewColor}>
        <input ref={(el) => {this._input = el}} onChange={this.colorValue} placeholder="Enter the color"></input>
        <button type="submit">Go</button>
        </form>
        </div>
    );
  }
}

export default App;
