const recentSearchesContainer = $("#recent-searches-container");
const weatherInfoContainer = $("#weather-info-container");
const searchForm = $("#search-form");

const readFromLocalStorage = (key, defaultValue) => {
  //get data from LS using key name
  const dataFromLS = localStorage.getItem(key);

  //parse data from LS
  const parsedData = JSON.parse(dataFromLS);

  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
  }
};

const writeToLocalStorage = (key, value) => {
  //convert value to string
  const stringifiedValue = JSON.stringify(value);

  //set stringified value to LS for keyname
  localStorage.setItem(key, stringifiedValue);
};

const renderCurrentData = () => {
  const currentWeatherCard = `<div class="col-sm-12 col-md-9" id="weather-info-container">
  <!-- current data -->
  <div class="text-center">
    <div class="current-weather-card text-white p-3">
    <h2>Orlando</h2>
    <h3>Sat 28th May 2022</h3>
    <div><img src="http://openweathermap.org/img/w/04d.png" alt="icon of clouds"/></div>
  </div>

    <!-- weather metrics div -->
    <div>
      <div class="row g-0">
        <div class="col-sm-12 col-md-4 p-2 border fw-bold">Temperature</div>
        <div class="col-sm-12 col-md-8 p-2 border">20&deg;C</div>
      </div>

      <div class="row g-0">
        <div class="col-sm-12 col-md-4 p-2 border fw-bold">Humidity</div>
        <div class="col-sm-12 col-md-8 p-2 border">20&percnt;</div>
      </div>

      <div class="row g-0">
        <div class="col-sm-12 col-md-4 p-2 border fw-bold">Windspeed</div>
        <div class="col-sm-12 col-md-8 p-2 border">10 mpH</div>
      </div>

      <div class="row g-0">
        <div class="col-sm-12 col-md-4 p-2 border fw-bold">UV Index</div>
        <div class="col-sm-12 col-md-8 p-2 border"><span class="bg-success text-white px-3 rounded-2">1.5</span></div>
      </div>
  </div>
</div>`;

  weatherInfoContainer.append(currentWeatherCard);
};

const renderForecastData = () => {
  const forecastWeatherCards = `<div>
        <h2 class="mt-3 text-center">5 day Forecast</h2>
        <div class="d-flex flex-row justify-content-center flex-wrap">
        <!-- card one -->
        <div class="card m-2 forecast-card">
            <div class="d-flex justify-content-center">
        <img src="http://openweathermap.org/img/w/04d.png" class="card-img-top weather-icon" alt="weather icon">
        <div class="card-body">
            <h5 class="card-title text-center">Sun 22nd May</h5>
            <div class="mt-4 text-center">
            <div class="row g-0">
                <div class="col-12 border bg-light fw-bold">Temperature</div>
                <div class="col-12 border">20&deg;C</div>
            </div>
            <div class="row g-0">
                <div class="col-12 border bg-light fw-bold">Humidity</div>
                <div class="col-12 border">20&percnt;</div>
            </div>

            <div class="row g-0">
                <div class="col-12 border bg-light fw-bold">Windspeed</div>
                <div class="col-12 border">10 mpH</div>
            </div>

            <div class="row g-0">
                <div class="col-12 border bg-light fw-bold">UV Index</div>
                <div class="col-12 border"><span class="bg-success text-white px-3 rounded-2">1.5</span></div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <!-- card two -->
    <div class="card m-2 forecast-card">
        <div class="d-flex justify-content-center">
    <img src="http://openweathermap.org/img/w/04d.png" class="card-img-top weather-icon" alt="weather icon">
    <div class="card-body">
        <h5 class="card-title text-center">Sun 22nd May</h5>
        <div class="mt-4 text-center">
        <div class="row g-0">
            <div class="col-12 border bg-light fw-bold">Temperature</div>
            <div class="col-12 border">20&deg;C</div>
        </div>
        <div class="row g-0">
            <div class="col-12 border bg-light fw-bold">Humidity</div>
            <div class="col-12 border">20&percnt;</div>
        </div>

        <div class="row g-0">
            <div class="col-12 border bg-light fw-bold">Windspeed</div>
            <div class="col-12 border">10 mpH</div>
        </div>

        <div class="row g-0">
            <div class="col-12 border bg-light fw-bold">UV Index</div>
            <div class="col-12 border"><span class="bg-success text-white px-3 rounded-2">1.5</span></div>
        </div>
        </div>
    </div>
    </div>
    </div>
    <!-- card three -->
    <div class="card m-2 forecast-card">
    <div class="d-flex justify-content-center">
    <img src="http://openweathermap.org/img/w/04d.png" class="card-img-top weather-icon" alt="weather icon">
    <div class="card-body">
    <h5 class="card-title text-center">Sun 22nd May</h5>
    <div class="mt-4 text-center">
    <div class="row g-0">
        <div class="col-12 border bg-light fw-bold">Temperature</div>
        <div class="col-12 border">20&deg;C</div>
    </div>
    <div class="row g-0">
        <div class="col-12 border bg-light fw-bold">Humidity</div>
        <div class="col-12 border">20&percnt;</div>
    </div>

    <div class="row g-0">
        <div class="col-12 border bg-light fw-bold">Windspeed</div>
        <div class="col-12 border">10 mpH</div>
    </div>

    <div class="row g-0">
        <div class="col-12 border bg-light fw-bold">UV Index</div>
        <div class="col-12 border"><span class="bg-success text-white px-3 rounded-2">1.5</span></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <!-- card four -->
    <div class="card m-2 forecast-card">
    <div class="d-flex justify-content-center">
    <img src="http://openweathermap.org/img/w/04d.png" class="card-img-top weather-icon" alt="weather icon">
    <div class="card-body">
    <h5 class="card-title text-center">Sun 22nd May</h5>
    <div class="mt-4 text-center">
    <div class="row g-0">
    <div class="col-12 border bg-light fw-bold">Temperature</div>
    <div class="col-12 border">20&deg;C</div>
    </div>
    <div class="row g-0">
    <div class="col-12 border bg-light fw-bold">Humidity</div>
    <div class="col-12 border">20&percnt;</div>
    </div>

    <div class="row g-0">
    <div class="col-12 border bg-light fw-bold">Windspeed</div>
    <div class="col-12 border">10 mpH</div>
    </div>

    <div class="row g-0">
    <div class="col-12 border bg-light fw-bold">UV Index</div>
    <div class="col-12 border"><span class="bg-success text-white px-3 rounded-2">1.5</span></div>
    </div>
    </div>

    </div>
    </div>
    </div>
    <!-- card five -->
    <div class="card m-2 forecast-card">
    <div class="d-flex justify-content-center">
    <img src="http://openweathermap.org/img/w/04d.png" class="card-img-top weather-icon" alt="weather icon">
    <div class="card-body">
    <h5 class="card-title text-center">Sun 22nd May</h5>
    <div class="mt-4 text-center">
    <div class="row g-0">
    <div class="col-12 border bg-light fw-bold">Temperature</div>
    <div class="col-12 border">20&deg;C</div>
    </div>
    <div class="row g-0">
    <div class="col-12 border bg-light fw-bold">Humidity</div>
    <div class="col-12 border">20&percnt;</div>
    </div>

    <div class="row g-0">
    <div class="col-12 border bg-light fw-bold">Windspeed</div>
    <div class="col-12 border">10 mpH</div>
    </div>

    <div class="row g-0">
    <div class="col-12 border bg-light fw-bold">UV Index</div>
    <div class="col-12 border"><span class="bg-success text-white px-3 rounded-2">1.5</span></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>`;

  weatherInfoContainer.append(forecastWeatherCards);
};

const renderRecentSearches = () => {
  // get recent searches from LS
  const recentSearches = readFromLocalStorage("recentSearches", []);

  if (recentSearches.length) {
    const createRecentCity = (city) => {
      return `<li
            class="list-group-item border-top-0 border-end-0 border-start-0"
            data-city="${city}"
            >
            ${city}
            </li>`;
    };

    const recentCities = recentSearches.map(createRecentCity).join("");

    console.log(recentCities);

    //if render recent searches list
    const ul = `<ul class="list-group rounded-0">
        ${recentCities}
    </ul>`;

    //append to parent
    recentSearchesContainer.append(ul);
  } else {
    //else empty show alert
    const alert = `<div class="alert alert-warning" role="alert">You have no recent searches</div>`;

    //append to parent
    recentSearchesContainer.append(alert);
  }
};

const handleRecentSearchClick = (event) => {
  const target = $(event.target);
  //restrict clicks only from list items
  if (target.is("li")) {
    console.log("search");

    //get data city attribute
    const cityName = target.attr("data-city");
    console.log(cityName);
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  //get form input value
  const cityName = $("#search-input").val();

  if (cityName) {
    //fetch data from API

    // render current data
    renderCurrentData();
    //render forecast data
    renderForecastData();

    //get recent searches from LS
    const recentSearches = readFromLocalStorage("recentSearches", []);

    //push city name to array
    recentSearches.push(cityName);

    //write recent searches to LS
    writeToLocalStorage("recentSearches", recentSearches);

    //remove previous items
    recentSearchesContainer.children().last().remove();

    //re-render recent cities
    renderRecentSearches();
  }
};

const onReady = () => {
  renderRecentSearches();
};

recentSearchesContainer.click(handleRecentSearchClick);
searchForm.submit(handleFormSubmit);
$(document).ready(onReady);
