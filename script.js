"use strict";
const API = {
  BaseURL: "https://imdb-api.com/en/API",
};

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

// GET Search IDx

function getSearchID() {
  fetch(`${API.BaseURL}/Title/${APIKey}/....`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

// HTML Selectors
const DOMElements = {
  videoTitle: ".video-title",
  videoAuthor: ".video-author",
  videoStats: ".video-stats",
  videoThumbnail: ".thumbnail",
  searchBar: ".search-bar",
  searchBarBtn: ".search-icon-btn",
};
