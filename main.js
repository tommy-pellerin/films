import { showMovies } from './results.js';

let url;
url = 'temp.json'
const moviesBox = document.getElementById('moviesBox');
const form = document.querySelector('form');
const film = document.getElementById('search');
let filmValue;

film.addEventListener('input',()=>{
  console.log(film.value);
})

form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();
  filmValue = film.value;
  // Fetch data immediately

  fetchData();
});

async function fetchData() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    moviesBox.innerHTML = ''
    showMovies(results,moviesBox);
  } catch (error) {
    console.error('Response error:', error.message);
  }
}
fetchData();