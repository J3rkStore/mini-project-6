var searchFormEl = document.querySelector("#search-form");

function handleSearchFormSubmit(event) {
  event.preventDefault();

  // TODO create a variable for searchInputVal that obtains the value for the search input

  // TODO create a variable for formatInputVal that obtains the value for the format input

  // TODO if the user does not enter a search input, present an error in the console prompting them that they need a search input value
  if (!searchInputVal){
    console.error("Search field cannot be blank")
    alert("Search field cannot be blank")
  }
  // TODO Adujust the var queryString so that the query url uses the var searchInputVal after q= and the var formatInputVal after &format=
  var queryString = "./search-results.html?q=" + searchInputVal + "&format=" + formatInputVal

  location.assign(queryString);
}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);
