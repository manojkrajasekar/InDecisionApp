import React from 'react';


const Option = (props) => (
  <div className="option">
    <div className="option__text">
        <p>{props.count}. {props.optionText}</p>
    </div>
    <button 
        className="button button--link"
        onClick={(e) => {
            props.handleDeleteOption(props.optionText)
        }}
    >
    Remove
    </button>
  </div>
);

  export default Option;