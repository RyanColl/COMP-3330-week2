import React from "react";
import './Numbers.css';
const Numbers = ({numbers, current, setCurrent, inDecimalMode, putInDecimalMode}: any) => {
    const numPress = (num: number) => {
        if(num === 10) {
            putInDecimalMode(true)
            return
        }
        let items = current
        if(current[0] === 0) {
            items.shift()
        }
        setCurrent(items.concat(num))
    }
    const numPressInDecimal = (num: number) => {
        if(num === 10) {
            putInDecimalMode(true)
            return
        }
        let items = current
        let item = items.pop()
        if(item) {
            let trunc = Math.trunc(item)
            console.log(`This is our trunc: ${trunc}`)
            let decimals = num - trunc;
            console.log(`These are our decimals`)
            let newDec = decimals/10 + num/10
            console.log(`This is our new dec`)
            console.log(`This is what we are trying to set value ${items.concat(trunc + newDec)}`)
            // setCurrent(items.concat(trunc + newDec))
        }
        
    }
    return(
        <div className='numbers'>
            {numbers.map((num: string, i: number) => {
                let number = num !== '.' ? parseFloat(num) : 10
                return <button onClick={() => {!inDecimalMode ? numPress(number) : numPressInDecimal(number)}} key={i} id={(num === '.') ? `period` : `num-${num}`} className='button number'>{num}</button>
            })}
        </div>
    )
}
export default Numbers;