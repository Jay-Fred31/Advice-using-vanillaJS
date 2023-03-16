let adviceNumber = document.getElementById("advice-number")
let quote = document.getElementById("quote")
let dice = document.getElementById("dice-container")


fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        adviceNumber.textContent = data.slip.id
        quote.textContent = data.slip.advice
    })
    .catch(err => console.log("something went wrong"))


dice.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            adviceNumber.textContent = data.slip.id
            quote.textContent = data.slip.advice
        })
        .catch(err => console.log("something went wrong"))
    // try {
    //     let response = await fetch("https://apii.adviceslip.com/advice")
    //     let data = await response.json()
    //     adviceNumber.textContent = data.slip.id
    //     quote.textContent = data.slip.advice
    // } catch (error) {
    //     console.log("Something went wrong");
    // }

})