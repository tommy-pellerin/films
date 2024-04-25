import { showMovies } from './results.js';
import { showDetails } from './results.js';

const moviesBox = document.getElementById('moviesBox');
const form = document.querySelector('form');
const film = document.getElementById('search');
let filmValue;
let url;

// film.addEventListener('input',()=>{
//   console.log(film.value);
// })

form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();
  filmValue = film.value;
  
  if (filmValue){
    url = 'http://www.omdbapi.com/?apikey=bd77e14&s=' + `${filmValue}`
  };
  // Fetch data immediately
  fetchData(url);
});

//fetching first information part
export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log("fetchDAta");
    moviesBox.innerHTML = ''
    // Assuming showMovies can handle an array of movies
    results.Search.forEach((movie,index) => {
      
      showMovies(movie, moviesBox, index);
    });
  } catch (error) {
    console.error('Response error:', error.message);
  }
}
// fetchData('temp.json');

//fetching details part
export async function fetchDetail(detailUrl) {
  try {
  const response = await fetch(detailUrl);
  const result = await response.json();
  console.log("fetcheDetails");
    
  showDetails(result, moviesBox);
  
  } catch (error) {
    console.error('Response error:', error.message);
  }
}

// let detailsButton = document.getElementById('details');
// console.log(detailsButton);
// detailsButton.addEventListener('click', (event) => {
//   let index = event.target.getAttribute('data-index');
//   let movie = results.Search[index];
//   let detailUrl = 'http://www.omdbapi.com/?apikey=bd77e14&i=' + movie.imdbID;
//   fetchDetail(detailUrl);
// });