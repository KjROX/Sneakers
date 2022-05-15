//Variables
const mainHeroImage = document.querySelector(".main-image.landing");
const modalMainImage = document.querySelector(".main-image.modal");
const modalWindow = document.querySelector(".modal-outer");
const crossSymbol = document.querySelector(".close-icon");
const previousButton = document.querySelector(".previous-icon");
const nextButton = document.querySelector(".next-icon");
//Functions

function openModal() {
  modalWindow.classList.add("open");
}

function closeModal() {
  modalWindow.classList.remove("open");
}

//eventlisteners

mainHeroImage.addEventListener("click", openModal);
crossSymbol.addEventListener("click", closeModal);
window.addEventListener("keyup", (e) => {
  if (e.key === `Escape`) {
    closeModal();
  }
});
