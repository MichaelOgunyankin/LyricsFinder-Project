# JS-Project
 Project Week Task


    const lyricsText = document.createElement('p');
    lyricsText.innerText = JSON.stringify(apiData);
    lyricsText.classList.add('lyricsText');
    searchResults.append(lyricsText); how to make the lyrics more readable?



    !
<!-- Add an error message element in your HTML -->
<div id="errorMessage" style="color: red;"></div>

<!-- JavaScript code -->
<script>
    // Add a reference to the error message element
    const errorMessageElement = document.getElementById('errorMessage');

    // Add a click event listener to the clear button
    clearButton.addEventListener('click', clear);

    // Function to clear lyrics
    function clear() {
        searchResults.innerHTML = '';
        errorMessageElement.innerHTML = '';
        // alert('Lyrics cleared, try another song!');
    }

    // Asynchronous function to fetch the data
    async function getData(artist, song) {
        // Define the API endpoint we want to fetch from
        let apiURL = 'https://api.lyrics.ovh/v1/';
        // Await the response from the API
        const response = await fetch(apiURL + artist + "/" + song);

        // Check if the response is successful
        if (!response.ok) {
            // Display an error message if the response is not OK
            errorMessageElement.innerHTML = 'Error fetching lyrics. Please try again.';
            return null; // Return null to indicate an error
        }

        // Convert the response to JSON
        const apiData = await response.json();

        // Check if lyrics are available
        if (!apiData.lyrics) {
            // Display an error message if lyrics are undefined
            errorMessageElement.innerHTML = 'Lyrics not found for the given artist and song.';
            return null; // Return null to indicate an error
        }

        // Clear any previous error messages
        errorMessageElement.innerHTML = '';

        // Return the JSON response
        return apiData;
    }

    searchButton.addEventListener('click', async () => {
        let artist = artistInput.value;
        let song = songInput.value;

        try {
            const apiData = await getData(artist, song);

            if (apiData) {
                const lyricsText = document.createElement('p');
                lyricsText.innerText = apiData.lyrics;
                lyricsText.classList.add('lyricsText');
                searchResults.innerHTML = ''; // Clear previous lyrics
                searchResults.append(lyricsText);
                console.log(apiData);
            }
        } catch (error) {
            console.log(error);
        }
    });
</script>
