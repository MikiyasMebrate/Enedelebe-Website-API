const accessKey = `k_ek7d126x`;
const urlMostPolular = `https://imdb-api.com/en/API/MostPopularMovies/${accessKey}`;
const urlBoxofficeMovies = `https://imdb-api.com/en/API/BoxOffice/${accessKey}`;
const urlcomingSoon = `https://imdb-api.com/en/API/ComingSoon/${accessKey}`;


fetch(urlMostPolular)
  .then((response) => response.json())
  .then((mostPolularData) => {
    console.log(mostPolularData);

    for (let i = 0; i < 36; i++) {
      let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <button class="cards border-0 rounded"
        style="
        width: 170px;
        height: 260px;
        background-image: url(${mostPolularData.items[i].image});
        background-size: cover;
        background-position: center;"
        
       value="${mostPolularData.items[i].id}" onclick="getID(this.value)">
        </button>
        <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small">
          ${mostPolularData.items[i].title}
        </p>
        <p class="text-muted">
          ${mostPolularData.items[i].year} 
          <span class="badge bg-secondary float-end">${mostPolularData.items[i].imDbRating}</span>
        </p>
      </div>`;

      document.getElementById(`popularMoviesCard`).innerHTML += card;
    }
  })
  .catch((err) => console.error(err));



fetch(urlBoxofficeMovies)
  .then((response) => response.json())
  .then((boxOfficeMovies) => {
    console.log(boxOfficeMovies);

    for (let i = 0; i < 10; i++) {
      let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <button class="cards border-0 rounded"
        style="
        width: 170px;
        height: 260px;
        background-image: url(${boxOfficeMovies.items[i].image});
        background-size: cover;
        background-position: center;"
        
       value="${boxOfficeMovies.items[i].id}" onclick="getID(this.value)">
        </button>
        <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small">
          ${boxOfficeMovies.items[i].title}
        </p>
        <p class="text-muted">
          
          <span class="badge bg-secondary float-end"></span>
        </p>
      </div>`;

      document.getElementById(`boxOfficeMovies`).innerHTML += card;
    }
  })
  .catch((err) => console.error(err));



fetch(urlcomingSoon)
  .then((response) => response.json())
  .then((comingSoonMovies) => {
    console.log(comingSoonMovies);

    for (let i = 0; i < 36; i++) {
      let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
      <button class="cards border-0 rounded"
      style="
      width: 170px;
      height: 260px;
      background-image: url(${comingSoonMovies.items[i].image});
      background-size: cover;
      background-position: center;"
      
     value="${comingSoonMovies.items[i].id}" onclick="getID(this.value)">
      </button>
      <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small">
        ${comingSoonMovies.items[i].title}
      </p>
      <p class="text-muted">
        ${comingSoonMovies.items[i].year} 
        <span class="badge bg-secondary float-end"></span>
      </p>
    </div>`;

      document.getElementById(`comingSoon`).innerHTML += card;
    }
  })
  .catch((err) => console.error(err));



  function getID(id){
     
    const urlGetMovie = id;


  var cardDetail = ` <nav class="navbar navbar-expand-md navbar-dark bg-dark" id="nav">
  <div class="container-fluid">
    <a href="index.html" class="navbar-brand ms-4"
      ><img src="image/logo-color.png" width="200px" alt="Logo logo-color"
    /></a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navBar"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse justify-content-between me-5 navbar-collapse"
      id="navBar"
    >
      <div class="navbar-nav">
        <a href="index.html" class="nav-link me-2 active">Home</a>
        <a href="index.html" class="nav-link me-2">Movies</a>
        <a href="index.html" class="nav-link me-2">Tv Shows</a>
        <a href="index.html" class="nav-link me-2">Box Office</a>
        <a href="index.html" class="nav-link me-2">Top IMDB</a>
      </div>

      <div class="">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-warning" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</nav>

<div
  style="
    background-image: url(image/wallpaperflare.com_wallpaper.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0;
  "
>
  <div style="padding-bottom: 45%"></div>
</div>

<div class="container-lg mb-5" style="margin-top: -100px">
  <div class="card rounded pb-3 border-0 shadow-lg">
    <div class="row">
      <div
        class="col-sm-2 mt-3 mx-auto d-none d-md-block d-lg-block d-xxl-block d-xl-block"
      >
        <img src="image/poster.jpg" class="img-fluid rounded" alt="" />
      </div>
      <div class="col-sm-9 mx-auto">
        <h2 class="ms-3 me-3 fw-normal mt-3">
          Pinball: The Man Who Saved the Game
        </h2>
        <p class="ms-3 me-3 fw-bold text-warning">IMDB: 9</p>
        <p class="ms-3 me-3">
          The dramatic comedy is based on the true story of writer and
          pinball wizard Roger Sharpe, chronicling his journey to overturn
          New York City’s 35-year ban on pinball.
        </p>
        <div class="ms-3 me-3 row mt-5 mb-3">
          <div class="col-md-6">
            <p class="fw-bold m-1">
              Released: <span class="fw-normal"> 2023-03-17</span>
            </p>
            <p class="fw-bold m-1">
              Genre: <span class="fw-normal"> Comedy, Drama, History</span>
            </p>
            <p class="fw-bold m-1">
              Casts:
              <span class="fw-normal">
                Mike Faist, Crystal Reed, Dennis Boutsikaris, Kenneth Tigar,
                Mike Doyle</span
              >
            </p>
          </div>
          <div class="col-md-6">
            <p class="fw-bold m-1">
              Duration: <span class="fw-normal"> 92 min</span>
            </p>
            <p class="fw-bold m-1">
              Country:
              <span class="fw-normal"> United States of America</span>
            </p>
            <p class="fw-bold m-1">
              Production:
              <span class="fw-normal">
                Moving Picture Institute, Choice Films, Choice Films</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
document.body.innerHTML=cardDetail;
}
