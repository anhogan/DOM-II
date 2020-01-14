// Event Handlers
const body = document.querySelector('body');
body.addEventListener('keydown', () => {
  body.style.backgroundColor = "black";
  body.style.color = "yellow";
});
body.addEventListener('keyup', () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});
window.addEventListener('resize', () => {
  body.style.backgroundColor = "yellow";
})

const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', () => {
  funBus.textContent = "Hop On!";
});

const busImg = document.querySelector('img');
busImg.addEventListener('wheel', () => {
  busImg.src = "https://images.unsplash.com/photo-1547010932-0a13d4508fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
});

const welcome = document.querySelector('h2');
welcome.addEventListener('mouseleave', () => {
  welcome.style.fontFamily = 'Roboto';
  welcome.style.color = "goldenrod";
});

const letsGo = document.querySelector('.text-content h2');
letsGo.addEventListener('mouseover', () => {
  letsGo.textContent = "=====>>>";
  letsGo.style.color = "red";
});
letsGo.addEventListener('mouseleave', () => {
  letsGo.textContent = "Let's Go";
  letsGo.style.color = "black";
});

const dragImg = document.querySelector('.img-fluid');
dragImg.addEventListener('drag', () => {
  dragImg.style.border = "2px solid goldenrod";
});
dragImg.addEventListener('contextmenu', () => {
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
excursion.addEventListener('copy', () => {
  excursion.style.color = 'red';
});
excursion.addEventListener('click', () => {
  alert('More details on the selected trip...')
});

// Nav Refresh
const navRefresh = document.querySelector('nav');
navRefresh.addEventListener('click', (event) => {
  event.preventDefault();
});
window.addEventListener('scroll', () => {
  navRefresh.style.backgroundColor = "yellow";
})