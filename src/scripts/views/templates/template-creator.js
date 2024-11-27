import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `
    <div class="resto-item">
        <div class="resto-thumbnail">
            <img class="lazyload" data-src="${CONFIG.BASE_SMALL_IMAGE_URL+restaurant.pictureId}" crossorigin="anonymous" alt="Gambar ${restaurant.name}">
            <p class="resto-city">${restaurant.city}</p>
        </div>
        <div class="resto-item-content">
            <p class="resto-item-rating">⭐ ${restaurant.rating}</p>
            <h1 >
            <a href="/#/detail/${restaurant.id}" class="resto-item-title"> ${restaurant.name}</a>
            </h1>
            <p class="resto-item-description">${restaurant.description}</p>
        </div>
    </div>
`;

const createRestoDetailTemplate = (restaurant) => `
    <h2 class="detail-resto-title">${restaurant.name}</h2>
    <img class="detail-resto-image lazyload" data-src="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous" alt="${restaurant.name}" />
    <div class="detail-resto-info">
        <h4>Alamat</h4>
        <p>${restaurant.address}</p>
        <h4>Kota</h4>
        <p>${restaurant.city}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
        <h4>Deskripsi</h4>
        <p>${restaurant.description}</p>
        <h4 class="menus-title">Menu's</h4>
        <div class="detail-resto-menu">
          <div>
            <h3 class="drinks-food">Makanan</h3>
            <ul>
              ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
          </div>
          <div>
            <h3 class="drinks-food">Minuman</h3>
            <ul>
              ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
          </div>
        </div>
    </div>    
    <div class="form-input-review-container">
        <div class="form-input-review">
        <h4 class="review-pelanggan">Tambahkan Review Kamu</h4>
            <form>
                <div class="input-name">
                    <label for="inputName" class="form">Nama</label>
                    <input name="inputName" type="text" class="formInput" id="inputName">
                </div>
                <div class="input-review">
                    <label for="inputReview" class="form-label">Review</label>
                    <input name="inputReview" type="text" class="formInput" id="inputReview">
                </div>
                <button id="submit-review" type="submit" class="submit-btn">Submit</button>
            </form>
        </div>
    </div>
    <h4 class="review-pelanggan">Review Pelanggan</h4>
    <div class="detail-resto-review">
    <p>${restaurant.customerReviews.map((reviews) => `
        <div class="detail-review-item">
        <div class="review-header">
            <p class="review-name">${reviews.name}</p>
            <p class="review-date">${reviews.date}</p>
        </div>
        <div class="body-review">
            <p>${reviews.review}</p>
        </div>
        </div>
    `).join('')}
    </div>
`;


const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;


export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate
};
