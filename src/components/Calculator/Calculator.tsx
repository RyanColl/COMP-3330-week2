import { Decipher } from "crypto";
import React, { useState } from "react";
import Conversions from "../Conversions/Conversions";
import Display from "../Display/Display";
import Numbers from "../Numbers/Numbers";
import Operators from "../Operators/Operators";
import './Calculator.css';



const Calculator = ({
    calcData: {conversions, numbers, operators}, 
    value, setValue, inDecimalMode, putInDecimalMode
}: any) => {
    const [tempValue, setTempValue] = useState(0)
    const [inOperatorMode, putInOperatorMode] = useState(false)
    return(
        <div className='calculator'>
            {/* @ts-ignore */}
            <Display 
            value={value} 
            tempValue={tempValue}
            />
            <Conversions 
            value={value}
            setValue={setValue}
            conversions={conversions} 
            putInDecimalMode={putInDecimalMode}
            setTempValue={setTempValue}
            putInOperatorMode={putInOperatorMode}
            />
            <Numbers 
            value={value}
            setValue={setValue}
            numbers={numbers} 
            inDecimalMode={inDecimalMode}
            putInDecimalMode={putInDecimalMode}
            inOperatorMode={inOperatorMode}
            tempValue={tempValue}
            setTempValue={setTempValue}
            />
            {/* @ts-ignore */}
            <Operators 
            value={value}
            setValue={setValue}
            operators={operators} 
            tempValue={tempValue}
            setTempValue={setTempValue}
            inOperatorMode={inOperatorMode}
            putInOperatorMode={putInOperatorMode}
            putInDecimalMode={putInDecimalMode}
            />

        </div>
    )
}
export default Calculator;