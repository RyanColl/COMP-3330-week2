import React from "react";
import './Conversions.css'
import os from "../../Services/OperatorServices";
const Conversions = ({
    conversions, value, setValue, putInDecimalMode, setTempValue, putInOperatorMode
}: any) => {
    const convert = (id: string) => {
        
        // hit the percent symbol
        if(id === 'percent') {
              setValue(value * 0.01)
              putInDecimalMode(true)
        }
        // hit the plus/minus symbol
        if(id === 'plus-minus') {
            setValue(value * -1)
        }
        // hit the ac symbol
        if(id === 'ac') {
            setValue(0)
            putInDecimalMode(false)
            setTempValue(0)
            putInOperatorMode(false)
            os.reset();
        }
    }
    return(
        <div className='conversions'>
            {conversions.map((symbol: string, i: number) => {
                let buttonId = (symbol === '%') ? 'percent' : (symbol === '+/-') ? 'plus-minus' : 'ac';
                return <button onClick={() => {convert(buttonId)}} key={i} id={buttonId} className='button'>{symbol}</button>
            })}
        </div>
    )
}
export default Conversions;




