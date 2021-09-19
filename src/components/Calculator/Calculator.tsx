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
    const calculate = () => {
        
    }   
    return(
        <div className='calculator'>
            {/* @ts-ignore */}
            <Display 
            value={value} 
            />
            <Conversions 
            value={value}
            setValue={setValue}
            conversions={conversions} 
            putInDecimalMode={putInDecimalMode}
            />
            <Numbers 
            value={value}
            setValue={setValue}
            numbers={numbers} 
            inDecimalMode={inDecimalMode}
            putInDecimalMode={putInDecimalMode}
            />
            {/* @ts-ignore */}
            <Operators operators={operators} />

        </div>
    )
}
export default Calculator;