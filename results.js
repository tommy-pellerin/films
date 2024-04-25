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
      <div class="movieBox">
          <img src="${imageUrl}" alt="poster" />
          <div class="movieBody">
            <h2>${title}</h2>
            <p>Release date : ${released}</p>
            <p>Duration : ${duration}</p>
            <p>Actors : ${actors}</p>
            <p>Director : ${director}</p>
            <p>${description}</p>
            <button>READ MORE</button>
          </div>
                  
      </div>
  `;
}
