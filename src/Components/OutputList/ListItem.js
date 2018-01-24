import React, { Component } from 'react';
import moment from 'moment';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeStamp: moment().format(),
            timePassed: 0
        };
    }

    tick() {
        this.setState(prevState => ({
            timePassed: moment().diff(this.state.timeStamp, 'seconds')
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    render() {
        return (
            <li className={`post ${this.props.item.textClass} ${this.props.item.postBg}`}>
                    <p>{this.props.item.text}</p>
                    <code>{this.state.timePassed < 59 ? (`${this.state.timePassed} seconds ago`) : `${Math.floor(this.state.timePassed / 60)} minutes ago`}</code>
            </li>
        )
    }
}

export default ListItem;