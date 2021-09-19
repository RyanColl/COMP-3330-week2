import React from "react";
import './Display.css'
const Display = ({
    value
}: any ) => { 
    return(
        <div className='display'>
             <span className='display-number'>{value}</span>
        </div>
    )
}
export default Display;