const urlMostPolular = `https://imdb-api.com/en/API/MostPopularMovies/k_fp16kf4p`;

fetch(urlMostPolular)
  .then((response) => response.json())
  .then((mostPolularData) => {
    console.log(mostPolularData);

    for (let i = 0; i < 36; i++) {
      let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <a href="">
          <div class="card cards border-0">
            <img
              src="${mostPolularData.items[i].image}"
              class="img-fluid rounded-3"
              alt=""
              width="97%"
            />
          </div>
        </a>
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

const urlBoxofficeMovies = `https://imdb-api.com/en/API/BoxOffice/k_fp16kf4p`;

fetch(urlBoxofficeMovies)
  .then((response) => response.json())
  .then((boxOfficeMovies) => {
    console.log(boxOfficeMovies);

    for (let i = 0; i < 10; i++) {
      let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <a href="">
          <div class="card cards border-0">
            <img
              src="${boxOfficeMovies.items[i].image}"
              class="img-fluid rounded-3"
              alt=""
              width="97%"
            />
          </div>
        </a>
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



  const urlcomingSoon = `https://imdb-api.com/en/API/ComingSoon/k_fp16kf4p`;

fetch(urlcomingSoon)
  .then((response) => response.json())
  .then((comingSoonMovies) => {
    console.log(comingSoonMovies);

    for (let i = 0; i < 36; i++) {
      let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <a href="">
          <div class="card cards border-0">
            <img
              src="${comingSoonMovies.items[i].image}"
              class="img-fluid rounded-3"
              alt=""
              width="97%"
            />
          </div>
        </a>
        <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small">
          ${comingSoonMovies.items[i].title}
        </p>
        <p class="text-muted">
         
          <span class="badge bg-secondary float-end"></span>
        </p>
      </div>`;

      document.getElementById(`comingSoon`).innerHTML += card;
    }
  })
  .catch((err) => console.error(err));
