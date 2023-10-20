// Code here

//defining the BASE_URL

const BASE_URL = "http://localhost:3000";

//creating a function using async and await which returns the body an array of beers

async function getAllBeers() {
  const beersResponse = await fetch(`${BASE_URL}/beers`);
  const beers = await beersResponse.json();

  // return fetch(`${BASE_URL}/beers`);
  return beers;
}

// function that create beers html list

function beerList(beer) {
  const li = document.createElement("li");
  li.innerText = beer.name;
  li.addEventListener("click", () => {
    const beerInfo = document.getElementById("beer-info");
    populateBeerInfo(beer);
  });
  return li;
}

function populateBeerInfo(beer) {
  document.getElementById("beer-name").innerText = beer.name;
  document.getElementById("beer-image").src = beer.image_url;
  document.getElementById("beer-description").innerText = beer.description;


 const beerReviews = beer.reviews;

document.getElementById("review-list").innerHTML = beerReviews.map((beerReviews)=>{

    return `<li>${beerReviews}</li>`;

});

  descriptionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // const form = event.target;
    const descriptionText = descriptionForm.descriptionText.value;
    // console.log(descriptionText)

    let acceptData = () =>{
    data["text"] = descriptionText;
    console.log(data);
    document.getElementById("beer-description").innerText = data.text;
    //createPost();
    };

    acceptData();

  });
}

let data = {};

let createPost = () => {
    posts.innerHTML = data.text;
}



// const beerDescriptionForm = document.querySelector("#description-form");
const descriptionForm = document.getElementById("description-form");
const posts = document.getElementById("posts");


const reviewForm = document.getElementById("review-form");
reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const reviewText = reviewForm.reviewsText.value;
  // console.log(reviewText)


document.getElementById("review-list").innerHTML += `
<li>${reviewText}</li>`;


});

// listening to the html unorderedlist that populate the beers
const beerListNav = document.getElementById("beer-list");

//fetch the beers from the database

getAllBeers().then((beers) => {
  beers.map((beer) => {
    //render the content to the browser
    const li = beerList(beer);
    beerListNav.appendChild(li);
  });
});
