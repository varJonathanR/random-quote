// Selector

const author = document.getElementById("author");
const quoteTags = document.getElementById("tags");
const quote = document.getElementById("quote");
const newQuote = document.getElementById("newQuote");
const copyQuote = document.getElementById("copyQuote");

const apiURL = "https://api.quotable.io/random";

// Quote generator

function generate() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            author.innerHTML = data.author;
            quoteTags.innerHTML = data.tags.map(tag => `<li class="tag">${tag}</li>`).join("");
            quote.innerHTML = `"${data.content}"`;
        })
        .catch(error => console.log("Error:", error))
}

generate();

// Events

newQuote.addEventListener("click", generate);

copyQuote.addEventListener("click", () => {
    quote.select();
    navigator.clipboard.writeText(quote.value);
});
