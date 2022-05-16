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
let currentImage;
let indexOfCurrentImage;

//Functions

function openModal() {
  modalWindow.classList.add("open");
  document.body.classList.add("disable-scroll");
  CheckAndRemoveOpacity(previousButton);
  CheckAndRemoveOpacity(nextButton);
}

function closeModal() {
  modalWindow.classList.remove("open");
  document.body.classList.remove("disable-scroll");
}
function thumbnailToMainImage(src) {
  return src.replace("-thumbnail", "");
}

function mainToThumbnailImage(src) {
  return src.replace(".jpg", "-thumbnail.jpg");
}

function imageUpdation(src) {
  modalMainImage.src = thumbnailToMainImage(src);
}

function checkAndGiveOpacityClass() {
  const index = currentImageIndex();
  if (index === 0) {
    previousButton.classList.add("opacity");
  } else {
    previousButton.classList.remove("opacity");
  }
  if (index === modalThumbnailImages.length - 1) {
    nextButton.classList.add("opacity");
  } else {
    nextButton.classList.remove("opacity");
  }
}

function CheckAndRemoveOpacity(img) {
  if (img.classList.contains("opacity")) {
    img.classList.remove("opacity");
  }
}
function currentImageIndex() {
  return modalThumbnailImages.indexOf(currentImage);
}
function handleImageClick(e) {
  modalThumbnailImages.forEach((image) => {
    CheckAndRemoveOpacity(image);
  });
  e.currentTarget.classList.add("opacity");
  const { src } = e.currentTarget;
  currentImage = e.currentTarget;
  imageUpdation(src);
  checkAndGiveOpacityClass();
}

function imageUpdationOnPressingButton(index) {
  const displayingImage = modalThumbnailImages[index];
  const srcOfDisplayingImage = displayingImage.src;
  imageUpdation(srcOfDisplayingImage);
  modalThumbnailImages.forEach((image) => {
    CheckAndRemoveOpacity(image);
    if (image.src === srcOfDisplayingImage) {
      image.classList.add("opacity");
    }
  });
}
//eventlisteners

mainHeroImage.addEventListener("click", () => {
  modalThumbnailImages.forEach((image) => {
    CheckAndRemoveOpacity(image);
  });
  currentImage = modalThumbnailImages[0];
  modalThumbnailImages[0].classList.add("opacity");
  openModal();
  previousButton.classList.add("opacity");
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

mainThumbnailImages.forEach((mainThumbnailImg) => {
  mainThumbnailImg.addEventListener("click", (e) => {
    const { src } = e.currentTarget;
    imageUpdation(src);
    modalThumbnailImages.forEach((image) => {
      CheckAndRemoveOpacity(image);
      if (image.src === src) {
        currentImage = image;
        image.classList.add("opacity");
      }
    });
    openModal();
    checkAndGiveOpacityClass();
  });
});

nextButton.addEventListener("click", () => {
  indexOfCurrentImage = modalThumbnailImages.indexOf(currentImage);
  indexOfCurrentImage++;
  currentImage = modalThumbnailImages[indexOfCurrentImage];
  if (indexOfCurrentImage === modalThumbnailImages.length - 1) {
    nextButton.classList.add("opacity");
  }
  if (indexOfCurrentImage === 1) {
    previousButton.classList.remove("opacity");
  }
  imageUpdationOnPressingButton(indexOfCurrentImage);
});

previousButton.addEventListener("click", () => {
  indexOfCurrentImage = modalThumbnailImages.indexOf(currentImage);
  indexOfCurrentImage--;
  currentImage = modalThumbnailImages[indexOfCurrentImage];

  if (indexOfCurrentImage === 0) {
    previousButton.classList.add("opacity");
  }
  if (indexOfCurrentImage === modalThumbnailImages.length - 2) {
    nextButton.classList.remove("opacity");
  }
  imageUpdationOnPressingButton(indexOfCurrentImage);
});
