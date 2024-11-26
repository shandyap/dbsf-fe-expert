/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteResto.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((resto) => resto.id != id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteResto = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});