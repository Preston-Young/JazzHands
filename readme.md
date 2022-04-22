# Jazz Hands
## Description

Jazz Hands centralizes information returned from Spotify search results and displays them in a relevant and intuitive way. Users can search for artists, tracks, and albums, which all take the users to specialized pages for each category. For example, when searching for an artist, it displays the top 20 results, allowing the user to navigate to an artist page for each one. There, the user can find the artist's albums, top tracks, genres, link to their Spotify profile, and even similar artists. The album page provides the album cover, a link to the album on Spotify, and a list of all of its songs. Lastly, the track page shows the artist, album, and duration, along with the Spotify's "temperature" of the track, a percentage score for various categories such as "danceability", "energy", and "acousticness". Given that artists, tracks, and albums are all greatly intertwined, there is a lot of inherent navigation between the pages. As a step to improve accessibility and novelty, Jazz Hands provides a hand tracker, which recognizes pre-defined gestures using your webcam to help navigate and interact with the app. There are a total of 8 unique gestures, such as one open hand and two closed hands, and also included our custom gesture, swiping.

  

## Tech Stack

The frontend for Jazz Hands was written using **Angular** and **TypeScript** in combination with stylings from **Bootstrap**. The backend was built using **Node.js** and **Express.js** to set up endpoints that would call the **Spotify API**. The hand tracking component, along with the custom gestures, was implemented using the **Handtrack.js** library.

  

## Challenges

This was our first time working with both Angular and the Spotify API, so there was a steep learning curve. What made Angular more difficult to use than normal is that we first learned React, and it took a different type of thinking and discipline to wrap our heads around the way Angular implemented DOM manipulation and the model-view-controller architecture. Although the Spotify API was extremely powerful, it was extremely overwhelming at first to determine which endpoints to use in order to get the most relevant information for the app. Working on the hand tracking, specifically the custom gesture, was also tricky to implement.

  

## Setup

- cd into webserver folder
	- Run `npm install`
	- Run `npm start`
- cd into client folder
	- Run `npm install`
	- Run `ng serve --open`
- **Make sure you're using 16.13.0 for node**