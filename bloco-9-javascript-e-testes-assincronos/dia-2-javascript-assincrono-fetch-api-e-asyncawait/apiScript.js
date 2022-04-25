const fetch = require("node-fetch");

const API_URL = 'https://icanhazdadjoke.com/';

const append = () => {
  // const jokeContainer = document.querySelector('#jokeContainer');
  // console.log(jokeContainer);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const requisition = fetch(API_URL, myObject);
  requisition.then(response => response.json())
  .then(response => console.log(response.joke));

  append();
};

fetchJoke();

// window.onload = () => fetchJoke();