const articlesContainer = document.getElementById("card-container");
fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a38fc947e9664641989555874f2d83d3`)
    .then(response => response.json())
    .then(data => {
        
        const articleElements = articlesContainer.querySelectorAll("card-content");

        // Extract articles from the API response
        const articles = data.articles;

        articles.forEach((article, index) => {
            const headingElement = articleElements[index].querySelector(".news-title");
            const sourceElement = articleElements[index].querySelector(".news-source");

            headingElement.textContent = article.title;
            sourceElement.textContent = "Source: " + article.source.name;
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
