const recentSearchesContainer = $("#recent-searches-container");
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
