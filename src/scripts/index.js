import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import { dataRestaurant } from '../public/data/data';  

// Dynamically populate restaurant list
const restoList = document.getElementById('restoList');

dataRestaurant.forEach(data => {
  const article = document.createElement('article');
  article.classList.add('resto-item');

  const restoThumbnail = `
    <div class="resto-thumbnail">
      <img src="${data.pictureId}" alt="${data.name}">
      <p class="resto-city">${data.city}</p>
    </div>
  `;

  const restoContent = `
    <div class="resto-item-content">
      <p class="resto-item-rating">⭐ ${data.rating}</p>
      <h1 >
      <a href="#" class="resto-item-title"> ${data.name}</a>
      </h1>
      <p class="resto-item-description">${data.description}</p>
    </div>
  `;

  article.innerHTML = restoThumbnail + restoContent;
  restoList.appendChild(article);
});

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

// Toggle the drawer when the menu button is clicked
menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open'); // Toggle the 'open' class
  event.stopPropagation(); // Prevent the click event from bubbling up to the window
  console.log("Diklik!");
});

// Close the drawer when clicking outside of it
window.addEventListener('click', function (event) {
  // Check if the drawer is open and the click is outside the drawer
  if (drawer.classList.contains('open') && !drawer.contains(event.target) && event.target !== menu) {
    drawer.classList.remove('open'); // Remove the 'open' class to hide the drawer
  }
});

// Prevent the drawer from closing when clicking inside it
drawer.addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent click event inside the drawer from closing it
});