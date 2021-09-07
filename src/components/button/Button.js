import React from "react";
import'./Button.css';

function Button({value,handelClick,className}) {
  

  return (
    <button className={"button " + className} onClick={()=> handelClick(value) }>
     {value}
     
    </button>
  );
}

export default Button;
