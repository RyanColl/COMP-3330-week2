
class OperatorServices {
    value = 0;
    tempValue = 0;
    symbol = ''
    minus() {
        return (this.value - this.tempValue)
    }
    plus() {
        return (this.value + this.tempValue)
    }
    divide() {
        if(this.tempValue === 0) return this.tempValue;
        else return (this.value / this.tempValue)
    }
    multiply() {
        return (this.value * this.tempValue)
    }
    calculate(symbol: string, value: number, tempValue: number) {
        this.value = value;
        this.tempValue = tempValue;
        return this.equals(symbol)
    }
    equals(symbol: string) {
        // if the symbol is empty, aka nothing has been pressed yet
        console.log(`Current symbol: ${this.symbol}, incoming symbol: ${symbol}, this value: ${this.value} and the tem value: ${this.tempValue}`)
        if(this.symbol === '') {
            this.symbol = symbol
            return this.value
        }
        if(this.symbol === '-') {
            this.symbol = symbol
            return this.minus()
        }
        if(this.symbol === 'x') {
            this.symbol = symbol
            return this.multiply()
        }
        if(this.symbol === '+') {
            this.symbol = symbol
            return this.plus()
        }
        if(this.symbol === '÷') {
            this.symbol = symbol
            return this.divide()
        }
        if(this.symbol === '=') {
            this.symbol = symbol
            return this.value
        }
       
        // if(this.symbol === '') {
        //     this.symbol = symbol;
        //     return this.value;
        // }
        // // if the button pressed is the equals button, check if a symbol has been pressed. if it has, send that function
        // if(symbol === '=') {
        //     if(this.symbol === '-') return this.minus()
        //     if(this.symbol === 'x') return this.multiply()
        //     if(this.symbol === '+') return this.plus()
        //     if(this.symbol === '÷') return this.divide()
        // }
        // // if the button pressed is not equals, and the symbol is set, execute the function, but change the symbol
        // if(this.symbol === '-') {
        //     this.symbol = symbol;
        //     return this.minus()
        // }
        // if(this.symbol === 'x') {
        //     this.symbol = symbol;
        //     return this.multiply()
        // }
        // if(this.symbol === '+') {
        //     this.symbol = symbol;
        //     return this.plus()
        // }
        // if(this.symbol === '÷') {
        //     this.symbol = symbol;
        //     return this.divide()
        // }
        // console.log('returning this value')
        // return this.value;
    }
    reset() {
        this.value = 0;
        this.tempValue = 0;
        this.symbol = '';
    }
} 
const os = new OperatorServices()
export default os;