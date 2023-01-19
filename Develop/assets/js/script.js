var searchFormEl = document.querySelector("#search-form");
var formatEl = document.querySelector("#format-input");

function handleSearchFormSubmit(event) {
  event.preventDefault();

  // TODO create a variable for searchInputVal that obtains the value for the search input
  var searchInputVal = searchFormEl.value;
  // TODO create a variable for formatInputVal that obtains the value for the format input
  var formatInputVal = formatEl.value;

  // TODO if the user does not enter a search input, present an error in the console prompting them that they need a search input value

  // TODO Adujust the var queryString so that the query url uses the var searchInputVal after q= and the var formatInputVal after &format=
  var queryString = "./search-results.html?q=&format=";

  location.assign(queryString);
}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);
