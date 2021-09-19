import React from "react";
import './Operators.css'
const Operators = ({operators}: any) => {
    return(
        <div className='operators'>
            {operators.map((operator: string, i: number) => {
                return <button key={i} id={`operator-${i+1}`} className='button operator'>{operator}</button>
            })}
        </div>
    )
}
export default Operators;