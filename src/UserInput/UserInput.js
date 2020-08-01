import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <p>User Input Component</p>
            <input 
                type="text" 
                onChange={props.change} 
                value={props.currentName}/>
        </div>
    )
};

export default userInput;