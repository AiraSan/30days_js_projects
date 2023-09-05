const url = "https://api.quotable.io/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

async function getQuote(url) {
    let res = await fetch(url);
    let data =  await res.json();
    
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - by " + author.innerHTML, "Tweet Window", "width=600, height=300")
}

// function fetchApi(url){
//     fetch(url).then(res => res.json())
//                 .then(data => console.log(data))

// }
getQuote(url);