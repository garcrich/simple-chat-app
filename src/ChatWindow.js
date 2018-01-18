import React, { Component } from 'react';
import OutputList from './Components/OutputList/OutputList';

class ChatWindow extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { items: [], text: '' };
  }

  checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }

  PM_AM_Checker(i) {
    return (i <= 12) ? "AM" : "PM";
  }

  startTime() {
    var today = new Date(),
      h = today.getHours() % 12 === 0 ? 12 : this.checkTime(today.getHours() % 12),
      m = this.checkTime(today.getMinutes()),
      s = this.checkTime(today.getSeconds()),
      DayChecker = this.PM_AM_Checker(today.getHours());

    return `${h}:${m}:${s} ${DayChecker}`
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now(),
      timeStamp: this.startTime()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <h3>Stukent Chat App</h3>
        <OutputList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Send'}</button>
        </form>
      </div>
    );
  }


}

export default ChatWindow;
