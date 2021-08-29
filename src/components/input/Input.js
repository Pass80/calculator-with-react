import React from 'react'
import './Input.css';

 function Input(props) {
	 console.log(props)
	return (
    <div className="display">
      <p>{props.onScreen}</p>
      <p>{JSON.stringify({ a: 1, b: 3, c: "hi" })}</p>
    </div>
  );
}

export default Input;
