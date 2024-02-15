# JS-Project
 Project Week Task


    const lyricsText = document.createElement('p');
    lyricsText.innerText = JSON.stringify(apiData);
    lyricsText.classList.add('lyricsText');
    searchResults.append(lyricsText); how to make the lyrics more readable?



    !
!
To make the lyrics more readable when displaying them in your HTML document, you can format the JSON string to add line breaks and indentation. One way to achieve this is by using the JSON.stringify method with the third and fourth parameters.

Here's an example of how you can modify your code to make the lyrics more readable:

const lyricsText = document.createElement('p');

// Format the JSON string with 2 spaces of indentation
lyricsText.innerText = JSON.stringify(apiData, null, 2);

lyricsText.classList.add('lyricsText');
searchResults.append(lyricsText);
In this example, the JSON.stringify method takes three parameters:

The data to be converted to a JSON string (apiData in your case).
A replacer function (use null if you don't need it).
The number of spaces to use for indentation (set to 2 in this example for better readability).
Adjust the indentation value according to your preference. This will add proper indentation and line breaks to the











const lyricsText = document.createElement('p');
lyricsText.innerHTML = `<code>${hljs.highlight('json', JSON.stringify(apiData, null, 2)).value}</code>`;
lyricsText.classList.add('lyricsText');
searchResults.append(lyricsText);

