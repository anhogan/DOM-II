// Event Handlers
const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
  body.style.backgroundColor = "black";
  body.style.color = "yellow";
});
body.addEventListener('keyup', (event) => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});

const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', (event) => {
  funBus.textContent = "Hop On!";
});

const busImg = document.querySelector('img');
busImg.addEventListener('wheel', (event) => {
  busImg.src = "https://images.unsplash.com/photo-1547010932-0a13d4508fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
});

const welcome = document.querySelector('h2');
welcome.addEventListener('mouseleave', (event) => {
  welcome.style.fontFamily = 'Roboto';
  welcome.style.color = "goldenrod";
});

const letsGo = document.querySelector('.text-content h2');
letsGo.addEventListener('mouseover', (event) => {
  letsGo.textContent = "=====>>>";
  letsGo.style.color = "red";
});
letsGo.addEventListener('mouseleave', (event) => {
  letsGo.textContent = "Let's Go";
  letsGo.style.color = "black";
});

const dragImg = document.querySelector('.img-fluid');
dragImg.addEventListener('drag', (event) => {
  dragImg.style.border = "2px solid yellow";
});
dragImg.addEventListener('contextmenu', (event) => {
  alert('Visit this destination on our Island Getaway excursion. Sign up now to reserve your spot!');
});

const signUp = document.querySelector('.btn');
signUp.addEventListener('click', (event) => {
  event.stopPropagation();
  signUp.style.backgroundColor = "darkgray";
  signUp.style.color = "lightgray";
  alert("You're signed up! Pack those bags!")
});

const excursion = document.querySelector('.destination');
excursion.addEventListener('copy', (event) => {
  excursion.style.color = 'red';
});
excursion.addEventListener('click', (event) => {
  alert('More details on the selected trip...')
});

// Nav Refresh
const navRefresh = document.querySelector('nav');
navRefresh.addEventListener('click', (event) => {
  event.preventDefault();
});