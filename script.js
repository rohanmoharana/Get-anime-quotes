const searchBtn = document.getElementById("btn");
const input = document.getElementById("input");
const quoteCards = document.querySelector(".quote-cards");
const errorMessage = document.querySelector(".error-msg")


function fetchQuote(inputValue) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'da0946b3bamsh439ceed1d93ddc5p102231jsn6acd6186e319',
            'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
        }
    };

    fetch(`https://anime-quotes1.p.rapidapi.com/api/quotes/character?name=${inputValue}`, options)
        .then(function (response) {

            if (!response.ok) {
                throw new Error("No Quotes Found. Try With Different Name.")
            }
            return response.json();

        })
        .then(function (data) {
            console.log(data);

            let cardElement = data.map(function (item) {
                return `<div class="card">
                    <p>"${item.quote}"</p>
                    <p class="name">- ${item.character} -</p>
                    </div>`
            })
            cardElement = cardElement.join("");
            
            quoteCards.innerHTML = cardElement;
            errorMessage.textContent = "";
        })
        .catch(function (err) {
            errorMessage.textContent = err.message;
        })
}



searchBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const inputValue = input.value;

    fetchQuote(inputValue);

})


