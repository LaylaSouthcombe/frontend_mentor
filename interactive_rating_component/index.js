const submitBtn = document.getElementById("submitBtn")
const ratingCard = document.querySelector(".ratingCard")
const thankYouCard = document.querySelector(".thankYouCard")

const submitFeedback = () => {
    const checkValue = document.querySelector('input[name="ratingNum"]:checked')
    const feedBackString = document.getElementById("feedBackString")
    feedBackString.textContent = `You selected ${checkValue.value} out of 5`
    ratingCard.style.display = "none"
    thankYouCard.style.display = "block"
}

submitBtn.addEventListener("click", submitFeedback)