const cardNumOutput = document.querySelector(".cardNumOutput")
const cardNameOutput = document.querySelector(".cardNameOutput")
const cardExpDateOutput = document.querySelector(".cardExpDateOutput")
const cardCVCOutput = document.querySelector(".cardCVCOutput")

const cardNumberInput = document.getElementById("cardNumberInput")

cardNumberInput.addEventListener("keypress", () => {
    let index = cardNumberInput.value.lastIndexOf(' ');
    let testStr = cardNumberInput.value.substr(index + 1);
    if (testStr.length === 4 && (cardNumberInput.value.length !== 19)) {
        cardNumberInput.value = cardNumberInput.value + ' ';
    } 
})

const inputs = document.querySelectorAll('input[type="text"]')
const numberInputs = [].slice.call(inputs, 1)

var reg = new RegExp('^[0-9 ]+$');
numberInputs.forEach(x => {
    x.addEventListener("input", (e) => {
        if(!reg.test(e.target.value)){
            e.target.value = e.target.value.slice(0, -1)
        }
    })
})

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    const inputArray = [...data.entries()]
    console.log(inputArray)
    cardNumOutput.textContent = inputArray[0][1]
    cardNameOutput.textContent = inputArray[1][1]
    cardExpDateOutput.textContent = `${inputArray[2][1]}/${inputArray[3][1]}`
    cardCVCOutput.textContent = inputArray[3][1]
    const completeDiv = document.querySelector(".completeDiv")
    form.style.display = "none"
    completeDiv.style.display = "block"
})
