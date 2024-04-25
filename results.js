export const showMovies = (results,moviesBox) => {
  let title = results.Title;
  let released = results.Released;
  let actors = results.Actors;
  let director = results.Director;
  let description = results.Plot;
  let duration = results.Runtime;
  let imageUrl = results.Poster;
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