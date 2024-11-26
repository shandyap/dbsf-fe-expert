
/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto',  ({ I }) => {
  I.seeElement('#restos');
  I.see('Kamu Belum Menambahkan Daftar Favorite😓', '.favorite-empty');
});

Scenario('liking one resto', async ({ I }) => {
  // Memastikan daftar favorit kosong pada awalnya
  I.see('Kamu Belum Menambahkan Daftar Favorite😓', '.favorite-empty');
  I.amOnPage('/');

  // Menambahkan restoran ke daftar favorit
  I.seeElement('.resto-item-title',);
  const firstResto = locate('.resto-item-title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Memastikan restoran telah ditambahkan ke daftar favorit
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto-item-title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one resto', async ({ I }) => {
  // Memastikan daftar favorit kosong pada awalnya
  I.amOnPage('/#/favorite');
  I.see('Kamu Belum Menambahkan Daftar Favorite😓', '.favorite-empty');

  // Menambahkan restoran ke daftar favorit
  I.amOnPage('/');
  I.seeElement('.resto-item-title');
  const firstResto = locate('.resto-item-title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Memastikan restoran telah ditambahkan ke daftar favorit
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto-item-title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  // Membuka detail restoran yang telah disukai
  I.click(locate('.resto-item-title').first());

  // Menekan tombol batal menyukai (unlike)
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Memastikan restoran telah dihapus dari daftar favorit
  I.amOnPage('/#/favorite');
  I.see('Kamu Belum Menambahkan Daftar Favorite😓', '.favorite-empty');
});
