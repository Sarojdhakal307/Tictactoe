import React from 'react';
import '../App.css';

interface BlockProps {
    value: string | null | undefined;
    onClick ?:()=> void;
}

const Block:React.FC<BlockProps> =(props)=>{
    return (
        <div className='block' onClick={props.onClick}>
            {props.value}
        </div>

    )
};



export default Block;