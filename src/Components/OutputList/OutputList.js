import React from 'react';
import ListItem from './ListItem';

const InputList = (props) => {
    return (
        <ul>
            {props.items.map(item => (
                <ListItem key={item.id} item={item}/>
            ))}
        </ul>
    )
}

export default InputList