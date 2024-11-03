import FavoriteRestoIdb from '../../data/favorite-resto';
import { createRestoItemTemplate } from '../templates/template-creator';
const Favorite = {
  async render() {
    return `
        <section class="content">
          <h2 class="content__heading">Your Favorite Restaurant</h2>
          <h3 class="favorite-empty"></h3>
          <div id="restos" class="resto"></div>
        </section>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restosContainer = document.querySelector('#restos');
    const empty = document.querySelector('.favorite-empty');

    if (restos.length === 0) {
      empty.innerHTML += `
      <h3 class="favorite-empty">Kamu Belum Menambahkan Daftar Favorite😓</h3>
      `;
    }

    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  }
};

export default Favorite;