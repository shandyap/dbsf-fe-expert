import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import ReviewInput from '../../utils/review-input';

const Detail = {
  async render() {
    return `
         <div id="detailResto" class="detail-resto"></div>
         
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#detailResto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);

    const submitReview = document.querySelector('#submit-review');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      ReviewInput();
    });
  }
};

export default Detail;