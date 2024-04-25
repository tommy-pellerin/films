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
            <button class="details" data-imdbid="${movie.imdbID}" >READ MORE</button>
          </div>

      </div>
  `;

  //Delay the execution of the code inside the setTimeout until after the current call stack has cleared.
  setTimeout(()=> {
    // let detailsButtons = document.querySelectorAll('.details');
    
    // detailsButtons.forEach((button, buttonIndex) => {
    //   if (buttonIndex === index) {
    //     button.addEventListener('click', (event) => {
    //       console.log("detailsButton clicked");
    //       // let index = event.target.getAttribute('data-index');
    //       // console.log("movie");
    //       let detailUrl = 'http://www.omdbapi.com/?apikey=bd77e14&i=' + movie.imdbID;
    //       fetchDetail(detailUrl);
    //     });
    //   }

    // });

    animation()

  });

  
  

}

export const showDetails = (movie,modal) => {
  console.log("details showed");
  // console.log(movie);
  let title = movie.Title;
  let released = movie.Released;
  let actors = movie.Actors;
  let director = movie.Director;
  let description = movie.Plot;
  let duration = movie.Runtime;
  let imageUrl = movie.Poster;
  modal.innerHTML = `
      <!-- The Modal -->
      
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
      
  `;

  
  setTimeout(() => {
    // const modal = document.getElementById('myModal')
  
    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];
    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   console.log("span clicked");
    //   modal.style.display = "none";
    //   // window.onclick = null; // Remove the window onclick event listener
    // }
  
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     console.log("window clicked");
    //     modal.style.display = "none";
    //     // window.onclick = null; // Remove the window onclick event listener
    //   }
    // }
  });
}

window.addEventListener('click',() => {
  console.log("click");
})


//Intersection observer 
function animation() {
  let movieboxes = document.querySelectorAll('.movieBox');
    movieboxes.forEach((movieBox) => {
        //Intersection Observer
      const observer = new IntersectionObserver((entries)=>{
        for(const entry of entries){
          if (entry.isIntersecting) {
            entry.target.animate([
              {transform: 'translateX(-50px)',opacity:0},
              {transform: 'translateX(0px)',opacity:1}
            ], {
              duration:500
            })
          }
        }
      })

      observer.observe(movieBox)
    });
}