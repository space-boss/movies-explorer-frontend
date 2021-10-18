# MOVIES EXPLORER. Graduation project for Yandex.Praktikum

## Description

Client part of a graduation project for Yandex Praktikum. This is a multiple page website with a simple landing on the main page and search and filter functionality availible after user registration. This is a React-based project.

## Functionality
### Unauthorized user
* Sees the static landing of the main page
* Can register using username and email
* Can log in after the registration

### Authorized user
* Edit their username and email 
* Search for movies in the database under key words
* Filter movies according to their length 
* Save favorite movies in favorites
* Delete movies from favorites

### Layout
* Layout is created according to individual [Figma template](https://www.figma.com/file/zKPj5iu3DfCiNnrigaMlHy/Praktikum-Diplom?node-id=932%3A2618)
* Element positioning using grids and flexbox
* Adaptive layout - optimized for different screen resolutions (mobile, tablet, desktop)
* The number of displayed cards varies according to the screen size. If search result consists of multiple movies, initial amount of them will be displayed right away, more can be opened when clicking on "more" button. 

__Important__: according to the brief the page with movies should be empty before user carries out the first search. To see all availible movies press SPACE+ENTER when in the search bar.

## API used
* [external API](https://api.nomoreparties.co/beatfilm-movies) provided by Yandex in collaboration with Beat Film Festival - database with movies 
* [Backend part of the service written in Express.js](https://github.com/space-boss/movies-explorer-api) - responsible for user registration, athorization, saving movies in favorites, changing user information

## Routes
* `/` — main page
* `/movies` — movies library
* `/saved-movies` — library with favorite movies
* `/profile` — user profile
* `/signin` & `/signup` — pages of registration and authorization
* `/*` — 404 page

## Technologies used
* HTML, CSS
* BEM-methology
* Grid layout, media queries, adaptive layout
* JavaScript
* React.js
* React Router DOM

## Start project locally
`git clone https://github.com/space-boss/movies-explorer-frontend.git`

`npm i`

`npm start`





