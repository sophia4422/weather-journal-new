//target the parent
const recentSearchesContainer = $("#recent-searches-container");

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

const renderRecentSearches = () => {
  // get recent searches from LS
  const recentSearches = readFromLocalStorage("recentSearches", []);

  if (recentSearches.length) {
    //if render recent searches list
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
  }
};

const onReady = () => {
  renderRecentSearches();
};

recentSearchesContainer.click(handleRecentSearchClick);
$(document).ready(onReady);
