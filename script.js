const accessKey = `k_zgx7ylrn`;
const urlMostPolular = `https://imdb-api.com/en/API/MostPopularMovies/${accessKey}`;
const urlBoxofficeMovies = `https://imdb-api.com/en/API/BoxOffice/${accessKey}`;
const urlcomingSoon = `https://imdb-api.com/en/API/ComingSoon/${accessKey}`;
const urlSearchMovies = `https://imdb-api.com/en/API/SearchMovie/${accessKey}/`;



fetch(urlMostPolular)
  .then((response) => response.json())
  .then((mostPolularData) => {
    console.log(mostPolularData);

    for (let i = 0; i < 36; i++) {
      let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <button class="cards border-0 rounded shadow-lg"
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



  
function searchMovie() {
  var title = document.getElementById("searchId");
  const urlSearchMovies = `https://imdb-api.com/en/API/SearchMovie/${accessKey}/${title.value}`;
  fetch(urlSearchMovies)
    .then((response) => response.json())
    .then((searchMovies) => {
      let m='';
      document.getElementById(`popularMoviesCard`).innerHTML = m;
      
      document.getElementById('popularMoviesCardDiv').innerHTML=m;
      document.getElementById('boxOfficeMoviesDiv').innerHTML=m;
      document.getElementById('comingSoonDiv').innerHTML=m;
      for (let i = 0; i < searchMovies.results.length; i++) {
        console.log(searchMovies.results[i])
        let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <button class="cards border-0 rounded shadow-lg"
        style="
        width: 170px;
        height: 260px;
        background-image: url(${searchMovies.results[i].image});
        background-size: cover;
        background-position: center;"
        
       value="${searchMovies.results[i].id}" onclick="getID(this.value)">
        </button>
        <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small">
          ${searchMovies.results[i].title}
        </p>
        <p class="text-muted">
         
          <span class="badge bg-secondary float-end"></span>
        </p>
      </div>`;
      document.getElementById('searchBodyNew').innerHTML+=card;
      }
    })
  .catch(err=>console.error(err))
}


function getID(id) {
  const urlGetMovie = id;
  const detail = `https://imdb-api.com/en/API/Title/${accessKey}/${urlGetMovie}`;
  fetch(detail)
    .then(response => response.json())
    .then(getInfo => {
      console.log(getInfo);
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
        background-image: url(${getInfo.image});
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
            <img src="${getInfo.image}" class="img-fluid rounded" alt="" />
          </div>
          <div class="col-sm-9 mx-auto">
            <h2 class="ms-3 me-3 fw-normal mt-3">
              ${getInfo.title}
            </h2>
            <p class="ms-3 me-3 fw-bold text-warning">${getInfo.type}</p>
            <p class="ms-3 me-3">
              ${getInfo.plot}
            </p>
            <div class="ms-3 me-3 row mt-5 mb-3">
              <div class="col-md-6">
                <p class="fw-bold m-1">
                  Released: <span class="fw-normal"> ${getInfo.releaseDate}</span>
                </p>
                <p class="fw-bold m-1">
                  Directors: <span class="fw-normal"> ${getInfo.directors}</span>
                </p>
                <p class="fw-bold m-1">
                  Writers:
                  <span class="fw-normal">
                   ${getInfo.writers}  
                  </span
                  >
                </p>
              </div>
              <div class="col-md-6">
                <p class="fw-bold m-1">
                genres: <span class="fw-normal">${getInfo.genres}</span>
                </p>
                <p class="fw-bold m-1">
                  Country:
                  <span class="fw-normal">${getInfo.countries}</span>
                </p>
                <p class="fw-bold m-1">
                languages:
                  <span class="fw-normal">
                  ${getInfo.languages}</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      document.body.innerHTML = cardDetail;
    });
}

