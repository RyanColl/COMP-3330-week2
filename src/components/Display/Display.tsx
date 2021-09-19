import React from "react";
import './Display.css'
const Display = ({
    value, current
}: any ) => { 
    const display = (value === 0) ? [...current] : value
    return(
        <div className='display'>
             <span className='display-number'>{display}</span>
        </div>
    )
}
export default Display;