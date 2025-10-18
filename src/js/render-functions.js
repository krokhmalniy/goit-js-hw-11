import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  
  const insertion = images
    .map(
      image =>
        `<li class="gallery-item">
       <figure class="gallery-figure">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
   <figcaption class="gallery-info">
      <ul class="gallery-stats">
        <li>Likes ${image.likes}</li>
        <li>Views ${image.views}</li>
        <li>Comments ${image.comments}</li>
        <li>Downloads ${image.downloads}</li>
      </ul>
    </figcaption>
   </figure>
</li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', insertion);
  lightbox.refresh();
}  

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  gallery.innerHTML = '';
  lightbox.refresh();
}


export function showLoader() {
  const load = document.querySelector('.load');
  load.hidden = false;
  load.classList.add('loader');
}

export function hideLoader() {
  const load = document.querySelector('.load');
  load.hidden = true;
  load.classList.remove('loader');
}
