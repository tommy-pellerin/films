import { showMovies } from './results.js';
import { showDetails } from './results.js';

const moviesBox = document.getElementById('moviesBox');
const modal = document.getElementById('modal')
console.log(modal);
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
    console.log(url);
  };
  // Fetch data immediately
  fetchData(url);
  // console.log("fetchData done");
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
      console.log("showmovie done");

    });
    showDetailslistener()
  } catch (error) {
    console.error('Response error:', error.message);
  }
}
fetchData('temp.json');

//fetching details part
export async function fetchDetail(detailUrl) {
  try {
  const response = await fetch(detailUrl);
  const result = await response.json();
  console.log("fetcheDetails");
    
  showDetails(result, modal);
  // console.log("show datails finished");
  // showDetailslistener()
  // console.log("showdetails listener fin");
  closeDetailslistener()
  console.log("closedetails listener fin");
  } catch (error) {
    console.error('Response error:', error.message);
  }
}

//event listener part
function showDetailslistener() {
  let detailsButtons = document.querySelectorAll('.details');
    
    detailsButtons.forEach((button, buttonIndex) => {
      // if (buttonIndex === index) {
        button.addEventListener('click', (event) => {
          console.log("detailsButton clicked");
          // let index = event.target.getAttribute('data-index');
          modal.style.display = "block";
          console.log(buttonIndex);
          let detailUrl = 'http://www.omdbapi.com/?apikey=bd77e14&i=' + button.dataset.imdbid;
          fetchDetail(detailUrl);
        });
      // }

    });
}


function closeDetailslistener() {
  // const modal = document.getElementById('myModal')
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    console.log("span clicked");
    modal.style.display = "none";
    // window.onclick = null; // Remove the window onclick event listener
  }

}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    console.log("window clicked");
    modal.style.display = "none";
    // window.onclick = null; // Remove the window onclick event listener
  }
}
