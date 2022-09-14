const submitBtn = document.getElementById("submitBtn")
const ratingCard = document.querySelector(".ratingCard")
const thankYouCard = document.querySelector(".thankYouCard")

const inputs = document.querySelectorAll('input[name="ratingNum"]')

inputs.forEach(x => {
    x.addEventListener("click", (e) => {
        e.target.parentElement.classList.add("activeInput")
    })
})

const submitFeedback = () => {
    const checkValue = document.querySelector('input[name="ratingNum"]:checked')
    console.log(checkValue.parentElement)
    const feedBackString = document.getElementById("feedBackString")
    feedBackString.textContent = `You selected ${checkValue.value} out of 5`
    ratingCard.style.display = "none"
    thankYouCard.style.display = "block"
}

submitBtn.addEventListener("click", submitFeedback)