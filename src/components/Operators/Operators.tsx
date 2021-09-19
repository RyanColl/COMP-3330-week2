import React from "react";
import './Operators.css'




const Operators = ({
    operators, value, setValue, tempValue, setTempValue, inOperatorMode, putInOperatorMode
}: any) => {
   
    const [operator, setOperator] = React.useState('')
    const calculate = () => {
        if(operator === '=') {
            
        }
    }
    const operate = () => {
        
        switch (operator) {
            case '÷': 
                setValue(value/tempValue)
                setTempValue(0)
                setOperator('')
                break;
            case 'x': 
                setValue(value*tempValue)
                setTempValue(0)
                setOperator('')
                break;
            case '-': 
                setValue(value-tempValue)
                setTempValue(0)
                setOperator('')
                break;
            case '+': 
                setValue(value+tempValue)
                setTempValue(0)
                setOperator('')
                break;
            case '=': 
                setValue(value/tempValue)
                setTempValue(0)
                setOperator('')
                putInOperatorMode(false)
                break;
        
            default:
                break;
        }
    }
    const operatorPress = (symbol: string) => {
        if(inOperatorMode) {
            operate()
        } else {
            putInOperatorMode(true)
        }
        setOperator(symbol)
        
    }

    return(
        <div className='operators'>
            {operators.map((operator: string, i: number) => {
                return <button onClick={() => {operatorPress(operator)}} key={i} id={`operator-${i+1}`} className='button operator'>{operator}</button>
            })}
        </div>
    )
}
export default Operators;


