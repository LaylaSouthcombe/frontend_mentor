const calcInputs = document.querySelectorAll(".calcInput")
const calcNums = [].slice.call(calcInputs, 1)

const calcOperatorInputs = document.querySelectorAll(".calcOperator")
const calcOperators = [].slice.call(calcOperatorInputs, 1)

const calcEqual = document.querySelector(".calcEqual")

const calcReset = document.querySelector(".calcReset")
const calcDel = document.querySelector(".calcDel")

let sumStr = ""
let operator = ""
let numOne = ""
let numTwo = ""

calcNums.forEach(x => {
    x.addEventListener("click", (e) => {
        if(numOne === ""){
            sumStr += e.target.textContent
            numTwo += e.target.textContent
        }
    })
})

const addOperatorToString = (e) => {
    if(e.target.textContent === "x"){
        sumStr += "*"
        operator = "*"
    } else {
        sumStr += e.target.textContent
        operator = e.target.textContent
    }
}

calcOperators.forEach(x => {
    x.addEventListener("click", (e) => {
        if(!(sumStr.endsWith("*") || sumStr.endsWith("/") || sumStr.endsWith("+") || sumStr.endsWith("-")) && (sumStr.includes("*") || sumStr.includes("/") || sumStr.includes("+") || sumStr.includes("-"))){
            numOne = eval(numOne + operator + numTwo).toString()
            sumStr = numOne
            addOperatorToString(e)
            numTwo = ""
        } else if(sumStr.endsWith("*") || sumStr.endsWith("/") || sumStr.endsWith("+") || sumStr.endsWith("-")){
            sumStr = sumStr.slice(0, -1)
            addOperatorToString(e)
            numOne = numTwo
            numTwo = ""
        } else {
            addOperatorToString(e)
            numOne = numTwo
            numTwo = ""
        }
        console.log(numOne)
    })
})

calcEqual.addEventListener("click", (e) => {
    if(!(sumStr.includes("*") || sumStr.includes("/") || sumStr.includes("+") || sumStr.includes("-"))){
        numOne = sumStr
    } else if(!(sumStr.endsWith("*") || sumStr.endsWith("/") || sumStr.endsWith("+") || sumStr.endsWith("-"))){
        numOne = eval(numOne + operator + numTwo).toString()
    } else {
        numOne = eval(sumStr.slice(0, -1)).toString()
    }
    console.log(numOne)
})


calcReset.addEventListener("click", (e) => {
    sumStr = ""
    operator = ""
    numOne = ""
    numTwo = ""
})

calcDel.addEventListener("click", (e) => {
    sumStr = sumStr.slice(0, -1)
    numTwo = numTwo.slice(0, -1)
})