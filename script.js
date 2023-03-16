let adviceNumber = document.getElementById("advice-number")

fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {

        console.log(data);
        let id = data.slip.id
        adviceNumber.textContent = id
    })
    .catch(err => console.log("Something went wrong"))


