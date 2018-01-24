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
    }
  }

  selectEmoji = (e) => {
    this.setState((prevState) => ({
      text: prevState.text.concat(e.emoji)
    }))
  }
  
  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    var itemsLength = this.state.items.length
    var newItem = {
      text: this.state.text,
      id: Date.now(),
      textClass: itemsLength % 2 === 0 ? 'text-right' : 'text-left',
      postBg: itemsLength % 2 === 0 ? 'post-even' : 'post-odd'
    }
    
    this.setState(prevState => ({items: prevState.items.concat(newItem)}))
    this.setState({text: ''})
  }
  
  render() {
    return (
      
      <div>
      <OutputList items={this.state.items} />
      <form  style={this.state.items.length === 0 ? {marginTop: '70px'} : {marginTop: '0px'} }
       onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} value={this.state.text} placeholder='start a conversation' style={{padding: '0 12px'}}/>
      <button>{'Post'}</button>
      </form>

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
          <ReactEmojiSelector
            visibleAmount={90}
            searchPlaceholder='search for an emoji'
            onSelect={(e) => this.selectEmoji(e)}
            />
      </div>
      </div>
      
    );
  }
}

export default ChatWindow;