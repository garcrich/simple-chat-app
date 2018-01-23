import React, { Component } from 'react';
import OutputList from './Components/OutputList/OutputList';
import ReactEmojiSelector from 'react-emoji-selector';
import 'react-emoji-selector/lib/react-emoji-selector.css';


class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      selectedEmoji: {emoji: '💯', key: '100'}
    };
  }

  selectEmoji = (e) => {
    this.setState((prevState) => ({
      text: prevState.text.concat(e.emoji)
    }));
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
      <OutputList items={this.state.items} />
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} value={this.state.text} />
      <button>{'Send'}</button>
      </form>

      <div style={{position: 'relative', left: '190px', top: '10px'}}>
          <ReactEmojiSelector
            visibleAmount={90}
            searchPlaceholder='Search emoji'
            onSelect={(e) => this.selectEmoji(e)}
            />
      </div>
      </div>
      
    );
  }
}

export default ChatWindow;