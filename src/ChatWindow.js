import React, { Component } from 'react';
import OutputList from './Components/OutputList/OutputList';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem)
    }));
  }

  render() {
    return (
      <div>
        <h3>Stukent Chat App</h3>
        <OutputList items={this.state.items} tick={this.tick} timePassed={this.state.timePassed} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
          <button>{'Send'}</button>
        </form>
      </div>
    );
  }
}

export default ChatWindow;
