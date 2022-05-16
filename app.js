//Variables
const mainHeroImage = document.querySelector(".main-image.landing");
const modalImageDiv = document.querySelector(".hero-image.modal");
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
function imageUpdation() {}
//eventlisteners

mainHeroImage.addEventListener("click", openModal);
crossSymbol.addEventListener("click", closeModal);
window.addEventListener("keyup", (e) => {
  if (e.key === `Escape`) {
    closeModal();
  }
});
// nextButton.addEventListener("click", (e) => {
//   const parentEl = e.currentTarget.parentElement;
//   const currentEl = modalMainImage;
//   if (currentEl) console.log(currentEl);
//   //   console.log(e);
// });
modalWindow.addEventListener("click", (e) => {
  const clickOutside = !e.target.closest(".hero-image.modal");
  if (clickOutside) {
    closeModal();
  }
});
