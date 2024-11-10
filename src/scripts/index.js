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

document.addEventListener('DOMContentLoaded', () => {
  const skipLinkElem = document.querySelector('.skip-link');
  skipLinkElem.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#maincontent').focus();
  });
});
