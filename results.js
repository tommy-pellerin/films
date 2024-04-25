import { fetchDetail } from './main.js';

export const showMovies = (movie,moviesBox,index) => {
  // console.log(movie);
  let title = movie.Title;
  let year = movie.Year;
  let imageUrl = movie.Poster;
  moviesBox.innerHTML += `
      <div class="movieBox">
          <div class="poster">
            <img src="${imageUrl}" alt="poster" />
          </div>
          <div class="movieBody">
            <h2>${title}</h2>
            <p>Release date : ${year}</p>
            <button class="details" >READ MORE</button>
          </div>

      </div>
  `;

  //Delay the execution of the code inside the setTimeout until after the current call stack has cleared.
  setTimeout(()=> {
    let detailsButtons = document.querySelectorAll('.details');
    detailsButtons.forEach((button, buttonIndex) => {
      if (buttonIndex === index) {
        button.addEventListener('click', (event) => {
          console.log("test");
          // let index = event.target.getAttribute('data-index');
          console.log(movie);
          let detailUrl = 'http://www.omdbapi.com/?apikey=bd77e14&i=' + movie.imdbID;
          fetchDetail(detailUrl);
        });
      }
    });

  });

}

export const showDetails = (movie,moviesBox) => {
  console.log("details");
  console.log(movie);
  let title = movie.Title;
  let released = movie.Released;
  let actors = movie.Actors;
  let director = movie.Director;
  let description = movie.Plot;
  let duration = movie.Runtime;
  let imageUrl = movie.Poster;
  moviesBox.innerHTML += `
      <!-- The Modal -->
      <div class="modal" id="myModal">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="detailContent">
            <div class="detailPoster">
              <img src="${imageUrl}" alt="poster" />
            </div>
            <div class="detailmovieBody">
              <h2>${title}</h2>
              <p>Release date : ${released}</p>
              <p>Duration : ${duration}</p>
              <p>Actors : ${actors}</p>
              <p>Director : ${director}</p>
              <p>${description}</p>
            </div>
          </div>
        </div>     
      </div>
  `;

  
  setTimeout(() => {
    const modal = document.getElementById('myModal')
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      window.onclick = null; // Remove the window onclick event listener
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        window.onclick = null; // Remove the window onclick event listener
      }
    }
  });
}

