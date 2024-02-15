//add html elements:

//results output
const searchResults = document.getElementById('div3')
//searchbar 
const searchbar = document.getElementById('searchBar')
//searchButton
const searchButton = document.getElementById('searchbtn')

//inputs
const artistInput = document.getElementById('artistInput') 
const songInput = document.getElementById('songInput')





// Asynchronous function to fetch the data
async function getData(artist, song) {
    // Define the api endpoint we want to fetch from
    let apiURL = 'https://api.lyrics.ovh/v1/';
    // Await the response from the API
    const response = await fetch(apiURL+artist+"/"+song);
    // Convert the response to JSON
    const apiData = await response.json();
    // Return the JSON response
    return apiData;
}

searchButton.addEventListener('click', async () => {
    // Create an array to store the apiData
    
    let artist = artistInput.value
    let song = songInput.value
    let apiData = [];
    // Run the getData() function in a try/catch in order to detect errors
    try {
        apiData = await getData(artist, song);
    } catch (error) {
        console.log(error);
    }
    // Log the data received from the api
    //console.log(apiData);

    /*const lyricsText = document.createElement('p');
    lyricsText.innerText = JSON.stringify(apiData);
    lyricsText.classList.add('lyricsText');
    searchResults.append(lyricsText);*/

    /*const lyricsText = document.createElement('pre'); // Use <pre> for preformatted text
    lyricsText.innerText = JSON.stringify(apiData, null, 2); // Use null for replacer and 2 for indentation
    lyricsText.classList.add('lyricsText');
    searchResults.append(lyricsText);*/

    const lyricsText = document.createElement('p');
    lyricsText.innerHTML = `<code>${hljs.highlight('json', JSON.stringify(apiData, null, 2)).value}</code>`;
    lyricsText.classList.add('lyricsText');
    lyricsText.style.color = '#fff'
    searchResults.append(lyricsText);

    
});

//console.log(artistInput)