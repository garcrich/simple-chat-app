import React from 'react';
import ListItem from './ListItem';

const OutputList = (props) => {
    return (
        <ul className="post-list">
            {props.items.map(item => (
                <ListItem key={item.id} item={item}>
                </ListItem>
            ))}
        </ul>
    )
}

export default OutputList;