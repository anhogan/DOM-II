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

// const navBg = document.querySelector('header');
// navBg.addEventListener('scroll', (event) => {
//   navBg.style.backgroundColor = "yellow";
// });

const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', (event) => {
  funBus.textContent = "Hop On!";
});

const busImg = document.querySelector('img');
busImg.addEventListener('wheel', (event) => {
  busImg.src = "https://images.unsplash.com/photo-1547010932-0a13d4508fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
});
// busImg.addEventListener('resize', (event) => {
//   alert("Resizing isn't fun!")
// });

const welcome = document.querySelector('h2');
welcome.addEventListener('mouseleave', (event) => {
  welcome.style.fontFamily = 'Roboto';
  welcome.style.color = "goldenrod";
});

// FIX THIS!!! Select?
const paragraphText = document.querySelector('p');
paragraphText.addEventListener('select', (event) => {
  paragraphText.style.background = "yellow";
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

const excursion = document.querySelector('.destination');
excursion.addEventListener('copy', (event) => {
  alert('Copied to clipboard');
});

const signUp = document.querySelector('.btn');
signUp.addEventListener('contextmenu', (event) => {
  signUp.style.backgroundColor = "darkgray";
  signUp.style.color = "lightgray";
});
signUp.addEventListener('click', (event) => {
  alert("You're signed up! Pack those bags!")
});

// Nav Refresh
