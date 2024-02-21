//add html elements:

//results output
const searchResults = document.getElementById('div3')
//searchbar 
const searchbar = document.getElementById('searchBar')
//searchButton
const searchButton = document.getElementById('searchbtn')
const clearButton = document.getElementById('ClearButton')

//inputs
const artistInput = document.getElementById('artistInput') 
const songInput = document.getElementById('songInput')

const lyricsForm = document.getElementById('LyricsForm')


// error message element
const errorMessageElement = document.getElementById('errorMessage');


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

    const lyricsText = document.createElement('p');

    if(apiData.lyrics != undefined) {
    lyricsText.innerText = apiData.lyrics

}
    else{
        lyricsText.innerText = 'Sorry, the song lyrics for this artist and song name cannot be found.'
    }   lyricsText.classList.add('lyricsText');
    searchResults.append(lyricsText);
    console.log(apiData)

});

    // Function & Button to clear lyrics
    function clear() {
        searchResults.innerHTML = '';
    }

    clearButton.addEventListener('click', clear)

   