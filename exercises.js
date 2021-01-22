const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1a5370afd8e92de6bf1f29539e110806&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=1a5370afd8e92de6bf1f29539e110806&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");


getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}
function showMovies(movies) {
    main.innerHTML = ""

    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview} = movie;

        const movieEl = document.createElement("div");

        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <div class="movie">
        <img src="" alt="">
        <div class="movie-info">
            <h3>Movie Title</h3>
            <span class="green">9.8</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias totam illo sequi repellat nam? Sequi animi iure doloremque laborum distinctio.
        </div>
    </div>
        `
    })
}

form.addEventListener("submit", (e) => {
   e.preventDefault() 

   const searchTerm = search.value
   if(searchTerm && searchTerm !== "") {
      getMovies(SEARCH_API + searchTerm)

      search.value = ""
   } else {
       window.location.reload()
   }
})