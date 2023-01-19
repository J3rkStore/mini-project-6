var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split("&");

  // Get the query and format values
  var query = searchParamsArr[0].split("=").pop();
  var format = searchParamsArr[1].split("=").pop();

  searchApi(query, format);
}

function printResults(resultObj) {
  console.log(resultObj);

  // set up `<div>` to hold result content
  var resultCard = document.createElement("div");
  resultCard.classList.add("card", "bg-light", "text-dark", "mb-3", "p-3");

  var resultBody = document.createElement("div");
  resultBody.classList.add("card-body");
  resultCard.append(resultBody);

  var titleEl = document.createElement("h3");
  titleEl.textContent = resultObj.title;

  var bodyContentEl = document.createElement("p");
  bodyContentEl.innerHTML =
    "<strong>Date:</strong> " + resultObj.date + "<br/>";

  if (resultObj.subject) {
    bodyContentEl.innerHTML +=
      "<strong>Subjects:</strong> " + resultObj.subject.join(", ") + "<br/>";
  } else {
    bodyContentEl.innerHTML +=
      "<strong>Subjects:</strong> No subject for this entry.";
  }

  if (resultObj.description) {
    bodyContentEl.innerHTML +=
      "<strong>Description:</strong> " + resultObj.description[0];
  } else {
    bodyContentEl.innerHTML +=
      "<strong>Description:</strong>  No description for this entry.";
  }

  var linkButtonEl = document.createElement("a");
  linkButtonEl.textContent = "Read More";
  linkButtonEl.setAttribute("href", resultObj.url);
  linkButtonEl.classList.add("btn", "btn-dark");

  resultBody.append(titleEl, bodyContentEl, linkButtonEl);

  resultContentEl.append(resultCard);
}

function searchApi(query, format) {
  var locQueryUrl = "https://www.loc.gov/search/?fo=json";

  if (format) {
    locQueryUrl = "https://www.loc.gov/" + format + "/?fo=json";
  }

  locQueryUrl = locQueryUrl + "&q=" + query;

  fetch(locQueryUrl)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function (locRes) {
      // write query to page so user knows what they are viewing
      resultTextEl.textContent = locRes.search.query;

      console.log(locRes);

      if (!locRes.results.length) {
        console.log("No results found!");
        resultContentEl.innerHTML = "<h3>No results found, search again!</h3>";
      } else {
        resultContentEl.textContent = "";
        // TODO Loop over the search results and call printResults for each item
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  // TODO create a variable for searchInputVal that obtains the value for the search input

  // TODO create a variable for formatInputVal that obtains the value for the format input

  // TODO if the user does not enter a search input, present an error in the console prompting them that they need a search input value

  searchApi(searchInputVal, formatInputVal);
}

//TODO create an event listener for the element searchFormEl that,on submit, runs the function handleSearchFormSubmit

getParams();
