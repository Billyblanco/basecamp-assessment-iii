import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#F5EDA3'
};


class Class extends Component {
  render() {
    return (
      <div 
        h2 style={{...defaultStyle, width: "50%", display: 'inline-block'}}>Number Text
      </div>
    );
  }
}


class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "20%"}}>
        <img/>
        <h3> Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li><li>Song 4</li><li>Song 5</li></ul>
  </div>

    );
  }
}
class Recommend extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'center'}}>
      <h4>Recommended Artists</h4>
      <ul><li>Artist 1</li><li>Artist 2</li><li>Artist 3</li></ul>
</div>
    );
  }
}
  

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{...defaultStyle, 'font-size': '80px'}}>Title</h1>
      <Class/>
      <Class/> 
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Recommend/>
      </div>
    );
  }
}



export default App;
