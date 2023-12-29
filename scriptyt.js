const API_KEY = "a38fc947e9664641989555874f2d83d3";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load',() => fetchNews("India"));       // Calls the function everytime the page loads

async function fetchNews(query){

    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);    // fetch function initiates an HTTP request to the specified URL and returns a Promise (res).
                                                                // The await keyword pauses the execution of the code until the Promise (res) is resolved.

    const data = await res.json();              //Once the res Promise is resolved, the .json() method is called on the Response(res) object to parse the response body as JSON data. This returns a new Promise (data).
    console.log(data);
    bindData(data.articles)
}

function bindData(articles){
    const cardContainer = document.getElementById('card-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardContainer.innerHTML = '';
    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article){
    const newsimg = cardClone.querySelector('#news-image');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsimg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    newsSource.innerHTML = article.source.name;
}

function navItemClick(id){
    fetchNews(id);
}

const searchButton = document.getElementById('search-btn');
const searchText = document.getElementById('search-text');

searchButton.addEventListener("click", ()=>{
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);
})
