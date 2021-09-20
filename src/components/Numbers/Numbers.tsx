import React from "react";
import './Numbers.css';
const Numbers = ({
    value, setValue, numbers, inDecimalMode, putInDecimalMode, 
    inOperatorMode, tempValue, setTempValue
}: any) => {
    const numPress = (num: number) => {
        // if decimal, make decimal mode and return
        if(num === 10) {
            putInDecimalMode(true)
            return
        }
        // if in decimal mode, run numPressInDecimal, then return
        if(inDecimalMode) {
            numPressInDecimal(num)
            return;
        }
        // if in operator mode, make it temp value
        (inOperatorMode) 
        ? setTempValue(parseFloat(`${tempValue}${num}`))
        : setValue(parseFloat(`${value}${num}`))
    }
    const numPressInDecimal = (num: number) => {
      // make value a string and check for a decimal
      let stringValue = `${value}`;
      let index = stringValue.search(/[.]/g);
      
      // if there is no decimal in the string set the value to the value + the input num * 0.1
      // if the input num was 4, then make it .4 and add it to the value
      if (index === -1) {
        console.log(`Here is our new value: ${value + (num / 10)} and our temp: ${tempValue + (num / 10)}`)
        !inOperatorMode
        ? setValue(value + (num / 10))
        : setTempValue(tempValue + (num / 10));
      }
      // if there is a decimal set the value by concatting the strings and parsing it
      else {
        !inOperatorMode 
        ? setValue(parseFloat(`${value}${num}`)) 
        : setTempValue(tempValue + (num / 10));
      }
    };
    return(
        <div className='numbers'>
            {numbers.map((num: string, i: number) => {
                let number = num !== '.' ? parseFloat(num) : 10
                return <button 
                        onClick={() => {((`${value}`).length <= 8) && numPress(number)}} key={i} id={(num === '.') ? `period` : `num-${num}`}                                                           
                        className='button number'
                        accessKey={num}
                        >{num}</button>
            })}
        </div>
    )
}
export default Numbers;