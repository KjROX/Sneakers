//Variables
const mainHeroImage = document.querySelector(".main-image.landing");
const modalImageDiv = document.querySelector(".hero-image.modal");
const modalMainImage = document.querySelector(".main-image.modal");
const modalWindow = document.querySelector(".modal-outer");
const crossSymbol = document.querySelector(".close-icon");
const previousButton = document.querySelector(".previous-icon");
const nextButton = document.querySelector(".next-icon");
const images = Array.from(document.querySelectorAll(".thumbnail"));

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
  images.forEach((image) => {
    if (image.classList.contains("opacity")) {
      image.classList.remove("opacity");
    }
  });
  e.currentTarget.classList.add("opacity");
  const { src } = e.currentTarget;
  imageUpdation(src);
}

//eventlisteners

mainHeroImage.addEventListener("click", openModal);
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

images.forEach((image) => {
  image.addEventListener("click", handleImageClick);
});
