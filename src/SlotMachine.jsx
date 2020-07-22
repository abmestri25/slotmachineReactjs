import React from 'react';
import "./App.css"

const SlotMachine = (props) => {

    let x = props.x;
    let y = props.y;
    let z = props.z;
   

    if (props.x===props.y && props.y===props.z){
        return <>
        
        <div className="emojies">
        {x} {y} {z}
        </div>
        <h3 className="result">Matching</h3>
      
        </>
    }
    else{
        return <>
        <div className="emojies">
        {x} {y} {z}

        </div>
        <h3 className="result">Not Matching</h3>
        </>
    }
}

export default SlotMachine;