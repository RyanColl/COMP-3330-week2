import React from "react";
import './Operators.css'
import os from "../../Services/OperatorServices";



const Operators = ({
    operators, value, setValue, tempValue, setTempValue, 
    inOperatorMode, putInOperatorMode, putInDecimalMode
}: any) => {
   
    const calculate = (symbol: string) => {
        (symbol === '=') ? putInOperatorMode(false) : putInOperatorMode(true)
        putInDecimalMode(false)
        setValue(os.calculate(symbol, value, tempValue))
        setTempValue(0)
    }
    
    
    return(
        <div className='operators'>
            {operators.map((operator: string, i: number) => {
                return <button onClick={() => {calculate(operator)}} key={i} id={`operator-${i+1}`} className='button operator'>{operator}</button>
            })}
        </div>
    )
}
export default Operators;


