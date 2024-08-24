import React from 'react';
import '../App.css';

interface buttonprops{
    onClick?: ()=> void;
}

const Button:React.FC<buttonprops> =(props)=>{
    return (
        <div>
            <button className="button" onClick={props.onClick}>
                NewGame !
            </button>
        </div>
    )
}
export default Button;