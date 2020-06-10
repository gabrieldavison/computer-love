const modal = document.getElementById("modal");
modal.addEventListener("click", () => closeModal());
const modalImages = document.querySelectorAll(".modal-image");
const previews = document.querySelectorAll(".preview");

function openModal() {
  modal.classList.toggle("hidden");
}

function closeModal() {
  modal.classList.toggle("hidden");
  modalImages.forEach((image) => image.classList.add("hidden"));
}

function showImage(index) {
  modalImages[index].src = modalImages[index].dataset.src;
  modalImages[index].classList.remove("hidden");
  openModal();
}

previews.forEach((preview) => {
  preview.addEventListener("click", () =>
    showImage(parseInt(preview.dataset.image) - 1)
  );
});
