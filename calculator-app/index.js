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
        sumStr += e.target.textContent
        numTwo += e.target.textContent
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
        if(!(sumStr.endsWith("*") || sumStr.endsWith("/") ||    sumStr.endsWith("+") || sumStr.endsWith("-"))){
            numOne = eval(numOne + operator + numTwo).toString()
            sumStr = numOne
            addOperatorToString(e)
            numTwo = ""
        } else {
            numOne = sumStr.slice(0, -1)
            sumStr = sumStr.slice(0, -1)
            addOperatorToString(e)
            numTwo = ""
        }
    })
})

calcEqual.addEventListener("click", (e) => {
    if(!(sumStr.endsWith("*") || sumStr.endsWith("/") || sumStr.endsWith("+") || sumStr.endsWith("-"))){
        numOne = eval(numOne + operator + numTwo).toString()
    } else {
        numOne = eval(sumStr.slice(0, -1)).toString()
    }
})


calcReset.addEventListener("click", (e) => {
    console.log(e.target.textContent)
})

calcDel.addEventListener("click", (e) => {
    console.log(e.target.textContent)
})