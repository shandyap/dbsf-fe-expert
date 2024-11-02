import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Laper? Scroll Aja, KlikResto!</h1>
          <p class="hero-tagline">
            Dari yang murah sampai yang wah, semua tempat makan ada di sini!
          </p>
        </div>
    </div>
        <section class="content">
          <div class="explore-resto">
            <h1 class="explore-resto-label">Explore Resto!</h1>
          </div>
          <div id="restoList" class="resto"></div>
        </section>
        `;
  },

  async afterRender() {
    const resto = await RestoDbSource.Home();
    const restoContainer = document.querySelector('#restoList');
    resto.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant);

    });
  }
};

export default Home;