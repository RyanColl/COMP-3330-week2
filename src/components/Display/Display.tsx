import React from "react";
import './Display.css'
const Display = ({
    value, tempValue
}: any ) => { 
    const display = ((`${value}`).length <= 9) ? value : value.toFixed(2)
    const tempDisplay = ((`${tempValue}`).length <= 9) ? tempValue : tempValue.toFixed(2)
    console.log(tempValue, value)
    return(
        <div className='display'>
             <span className='display-number'>{tempValue === 0 ? display : tempDisplay}</span>
        </div>
    )
}
export default Display;