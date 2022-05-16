//Variables
const mainHeroImage = document.querySelector(".main-image.landing");
const modalImageDiv = document.querySelector(".hero-image.modal");
const modalMainImage = document.querySelector(".main-image.modal");
const modalWindow = document.querySelector(".modal-outer");
const crossSymbol = document.querySelector(".close-icon");
const previousButton = document.querySelector(".previous-icon");
const nextButton = document.querySelector(".next-icon");
const modalThumbnailImages = Array.from(
  document.querySelectorAll(".thumbnail")
);
const mainThumbnailImages = Array.from(
  document.querySelectorAll(".landing-thumbnail")
);

//Functions

function openModal() {
  modalWindow.classList.add("open");
}

function closeModal() {
  modalWindow.classList.remove("open");
}
function thumbnailToMainImage(src) {
  return src.replace("-thumbnail", "");
}

function imageUpdation(src) {
  modalMainImage.src = thumbnailToMainImage(src);
}

function handleImageClick(e) {
  modalThumbnailImages.forEach((image) => {
    if (image.classList.contains("opacity")) {
      image.classList.remove("opacity");
    }
  });
  e.currentTarget.classList.add("opacity");
  const { src } = e.currentTarget;
  imageUpdation(src);
}

//eventlisteners

mainHeroImage.addEventListener("click", () => {
  modalThumbnailImages.forEach((image) => {
    if (image.classList.contains("opacity")) {
      image.classList.remove("opacity");
    }
  });
  modalThumbnailImages[0].classList.add("opacity");
  openModal();
});
crossSymbol.addEventListener("click", closeModal);
window.addEventListener("keyup", (e) => {
  if (e.key === `Escape`) {
    closeModal();
  }
});

modalWindow.addEventListener("click", (e) => {
  const clickOutside = !e.target.closest(".hero-image.modal");
  if (clickOutside) {
    closeModal();
  }
});

modalThumbnailImages.forEach((image) => {
  image.addEventListener("click", handleImageClick);
});
mainThumbnailImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    const { src } = e.currentTarget;
    imageUpdation(src);
    modalThumbnailImages.forEach((image1) => {
      if (image1.classList.contains("opacity")) {
        image1.classList.remove("opacity");
      }
      if (image1.src === src) {
        image1.classList.add("opacity");
      }
    });
    openModal();
  });
});
