/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
      };

      beforeEach(() => {
        addLikeButtonContainer();
      });


  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

     // Memastikan resto berhasil disukai
     const resto = await FavoriteRestoIdb.getResto(1);
     expect(resto).toEqual({ id: 1 });

     await FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIdb.putResto({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});