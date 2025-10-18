import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const container = document.querySelector('.container');
const formSearch = document.querySelector('.form');
const formText = document.querySelector('.form-text');
let formTextValue = '';

formSearch.addEventListener('submit', event => {
  event.preventDefault();
  showLoader();
  formTextValue = formText.value.trim().toLowerCase();
  clearGallery();

  if (!formTextValue) {
    return;
  }
  getImagesByQuery(formTextValue)
    .then(response => {
      if (response.data.hits.length === 0) {
        return iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      const images = response.data.hits;

      createGallery(images);
    })
    .catch(error => {
      console.error('Виникла помилка:', error);
    })
    .finally(hideLoader);

  formText.value = '';
});
