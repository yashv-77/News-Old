// const themeSwitcher = document.getElementById('checkbox');
// const darkThemeLink = document.getElementById('dark-theme-css');


// themeSwitcher.addEventListener('click', () => {
//     darkThemeLink.disabled = !darkThemeLink.disabled;
// });
// ________________________________________________________

//fetch(url): The fetch function is a modern way to make network requests in JavaScript. In the code above, you're calling the fetch function and passing a URL as an argument. This URL specifies the endpoint you want to request data from. The fetch function returns a Promise that resolves to the Response to that request.

//await res.json(): The await keyword is used to pause the execution of the code until the Promise returned by fetch resolves. Once the Promise is resolved, you're calling the .json() method on the Response object (res). This method reads the response stream to completion and returns a Promise that resolves with the parsed JSON data.

const API_KEY = "a38fc947e9664641989555874f2d83d3";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load',() => fetchNews("India"));       // Calls the function everytime the page loads

async function fetchNews(query){

    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);    // fetch function initiates an HTTP request to the specified URL and returns a Promise (res).
                                                                    // The await keyword pauses the execution of the code until the Promise (res) is resolved.

    const data = await res.json();              //Once the res Promise is resolved, the .json() method is called on the Response(res) object to parse the response body as JSON data. This returns a new Promise (data).
    console.log(data);
    bindData(data.article)
}



