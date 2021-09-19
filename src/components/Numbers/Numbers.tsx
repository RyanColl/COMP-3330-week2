import React from "react";
import './Numbers.css';
const Numbers = ({value, setValue, numbers, inDecimalMode, putInDecimalMode}: any) => {
    const numPress = (num: number) => {
        if(num === 10) {
            putInDecimalMode(true)
            return
        }
        let combined = `${value}${num}`
        setValue(parseFloat(combined))
    }
    const numPressInDecimal = (num: number) => {
        //if decimal button is hit immediately return
        if(num === 10) {
            putInDecimalMode(true)
            return
        }
        // make value a string
        let stringValue = `${value}`
        let index = stringValue.search(/[.]/g)

        // if there is no decimal in the string
        if(index === -1) {
            setValue(value + num/10)
        }
        // if there is a decimal set the value by concatting the strings and parsing it
        else {
            setValue(parseFloat(`${value}${num}`))
        }
    }
    return(
        <div className='numbers'>
            {numbers.map((num: string, i: number) => {
                let number = num !== '.' ? parseFloat(num) : 10
                return <button 
                        onClick={() => {((`${value}`).length <= 8) 
                                        && (!inDecimalMode 
                                            ? numPress(number) 
                                            : numPressInDecimal(number))}} key={i} id={(num === '.') 
                                                                                        ? `period` 
                                                                                        : `num-${num}`} 
                        className='button number'>{num}</button>
            })}
        </div>
    )
}
export default Numbers;