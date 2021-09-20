# Getting Started With My Project!

## Week 2

In week 2, we discussed the basics of state. We use state to change variables in the React app by asking react to scan both the virtual DOM and the real DOM, and then change the real DOM to match the virtual one. This updates the page instead of refreshing ti, giving react its smooth ffel.

### ES6 Usage Examples

If you remember from last week, we used the latest features of EC6 in our project and we documented them here. Well in this project, I used the following EC6 features:

Arrow Function from Operators.tsx: <pre><code> const calculate = (symbol: string) => {
        (symbol === '=') ? putInOperatorMode(false) : putInOperatorMode(true)
        putInDecimalMode(false)
        setValue(os.calculate(symbol, value, tempValue))
        setTempValue(0)
    }</code></pre>

Destructuring from Numbers.tsx: <pre><code>const Numbers = ({
    value, setValue, numbers, inDecimalMode, putInDecimalMode, 
    inOperatorMode, tempValue, setTempValue
}: any) => {return(<></>)}</code></pre>

Class from NumberServices.ts: <pre><code>
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
    }
    reset() {
        this.value = 0;
        this.tempValue = 0;
        this.symbol = '';
    }
} 
const os = new OperatorServices()
export default os;</code></pre>

Let from Numbers.tsx: <pre><code>let stringValue = `${value}`;
      let index = stringValue.search(/[.]/g);</code></pre>
      
This is the extent of my EC6 feature usage in this project.

### Typescript

Typescript is involved in the project, but do not worry, simply using ```npm install``` when you enter the project solves any sort of dependency problems. To install typescript in a react-app of your own, visit this [link.](https://create-react-app.dev/docs/adding-typescript/)

### Ternary

[Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is used to check a condition that returns a boolean, and then executes code based on whether it is true or false. Ternary can look at a boolean directly, or it can look at a comparison, as it always resorts to a boolean. In my code, I did not use a comparison, just a straight boolean. 

In the code ``` (inOperatorMode) 
        ? setTempValue(parseFloat(`${tempValue}${num}`))
        : setValue(parseFloat(`${value}${num}`)) ``` I am asking javascript to evaluate the first statement, <code>inOperatorMode</code>, and if its true, return a function call <code>setTempValue</code>. If <code>inOperatorMode</code> is false, return a function call <code>setValue</code>. I am using it in this instance to assign a value to the state variable tempvalue or value based on the falsity of <code>inOperatorMode</code>.

### State

State is used to update a component. Updating a component re-renders it, but with the re-rendered value. </br>
For example, in the following code, we will destructure our state variable and our component-updating function (as described in the [docs](https://reactjs.org/docs/hooks-state.html)) and give it an initial value of a boolean.
</br>

<code>const [inOperatorMode, putInOperatorMode] = React.useState(false)</code>

<code>inOperatorMode</code> is a boolean, and <code>putInOperatorMode</code> takes in a boolean, and sets <code>inOperatorMode</code> as such. 

Like this: <code>putInOperatorMode(true)</code>

### Ternary + State

Ternary and state work very well together for various reasons, but I want to go over what I am using in this app. I use ternary and state because when you use state to re-render a component, the entire component is reloaded, thus re-running whatever code is inside it. When we change the <code>inOperatorMode</code> to false and back to true using <code>putInOperatorMode(true)</code> and <code>putInOperatorMode(false)</code> , we reload the function, but with <code>inOperatorMode</code> changed to the variable we set. This means the when ``` (inOperatorMode) 
        ? setTempValue(parseFloat(`${tempValue}${num}`))
        : setValue(parseFloat(`${value}${num}`)) ``` is read, depending on what the state variable is at the time, true or false, a different setState function will be run. This updates the variable <code>value</code> if its true, or <code>tempValue</code> its false.

My app is my first attempt at creating a functioning calculator. I start out by creating an array for each of my button types accross the calculator. I create a grid like structure and layout div-gridss accross to hold the differnet colours. I fill the div-grids with the buttons from the arrays by mapping them out into pre-made structures that use flexbox to move the text to the middle of the button. I start to give functions to the buttons, only to realize the decimal is going to mess me up. I make a state variable called <code>inDecimalMode</code> that gets activated when you click the decimal, and any further numbers pressed are logically placed behind the decimal. I move onto logic with the operators. The operators all act as an equals button, calculating the <code>value</code> and the <code>tempValue</code> based on the previous operator set. I use class based logic to hold all of the functions and variables for this, but I use them to update state in the app. Overall my app still has some bugs as the way I enter into different map overlays based on the falsity of an item needs work. Ternarys are nice but they do have their limitations.

If I was going to code this again, or if I have the time to go in and change the logic this week, I would use an <code>input</code> tag to hold the data being entered by the buttons. This way, I would not have to enter decimal mode to get the correct numbers entered. with an <code>input</code> tag, anyhthing entered in would be a string, thus I would simply parseFloat it. I also use regex to find if their is a decimal in something. This is to make up for not using an input tag. Overall the way I coded this affects its functionality. It is not capable of being an actual calculator, but it looks really nice and you can do your 2+2's. (<i>In all reality, you can do a range of calculations, but when you are navigating the calculator you run into bugs. I will say the AC button is always reliable.</i>)


Please feel free to check out my website too, which is currently just a work in progress. [RyanColl](https://www.rcoll-dev.com)