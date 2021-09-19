import React from "react";
import './Conversions.css'
import { spreadToString } from "../../Services/StringServices";
const Conversions = ({
    conversions, value, setValue, current, setCurrent
}: any) => {
    const convert = (id: string) => {
        
        
        if(id === 'percent') {
              
        }
        
        if(id === 'plus-minus') {
            
            
        }
        if(id === 'ac') {
            setValue(0)
            setCurrent([0])
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




