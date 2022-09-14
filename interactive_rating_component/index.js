const submitBtn = document.getElementById("submitBtn")

const updateText = () => {
    const checkValue = document.querySelector('input[name="ratingNum"]:checked')
    console.log(checkValue.value)
    const feedBackString = document.getElementById("feedBackString")
    feedBackString.textContent = `You selected ${checkValue.value} out of 5`
}

submitBtn.addEventListener("click", updateText)