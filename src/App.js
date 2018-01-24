import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css';
import Video from './Components/Video/Video';
import Hero from './Components/Hero/Hero';
import ChatWindow from './ChatWindow';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Video/>
          <Hero/>
          <ChatWindow />
      </div>
        );
  }
}

export default App;
