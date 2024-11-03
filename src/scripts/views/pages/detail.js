/* eslint-disable camelcase */
import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import ReviewInput from '../../utils/review-input';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
         <div id="detailResto" class="detail-resto"></div>
         <div id="likeButtonContainer"></div>
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

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        city: resto.restaurant.city,
        description: resto.restaurant.description,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating,
      },
    });
  }
};

export default Detail;