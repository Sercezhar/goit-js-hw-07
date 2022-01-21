import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const images = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
          />
        </a>
      </div>`
  )
  .join("");

galleryRef.innerHTML = images;

const makeImageBigger = (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"  alt="${event.target.alt}"/>`
  );
  instance.show();

  const closeImgByEsc = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };
  window.addEventListener("keydown", closeImgByEsc);
};

galleryRef.addEventListener("click", makeImageBigger);
