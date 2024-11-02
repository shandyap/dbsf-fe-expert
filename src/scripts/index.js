import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
// import { dataRestaurant } from '../public/data/data';


const app = new App({
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  maincontent: document.querySelector('#maincontent'), // tambahkan mainContent
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});


// // Dynamically populate restaurant list
// const restoList = document.getElementById('restoList');

// dataRestaurant.forEach((data) => {
//   const article = document.createElement('article');
//   article.classList.add('resto-item');

//   const restoThumbnail = `
//     <div class="resto-thumbnail">
//       <img src="${data.pictureId}" alt="${data.name}">
//       <p class="resto-city">${data.city}</p>
//     </div>
//   `;

//   const restoContent = `
//     <div class="resto-item-content">
//       <p class="resto-item-rating">⭐ ${data.rating}</p>
//       <h1 >
//       <a href="#" class="resto-item-title"> ${data.name}</a>
//       </h1>
//       <p class="resto-item-description">${data.description}</p>
//     </div>
//   `;

//   article.innerHTML = restoThumbnail + restoContent;
//   restoList.appendChild(article);
// });
