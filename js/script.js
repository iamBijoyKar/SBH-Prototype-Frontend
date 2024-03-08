// console.log("Hello, World!");
document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM is ready!");
  const authModal = document.getElementById("auth-modal");
  authModal.showModal();
  const modalClose = document.getElementById("modal-close");
  modalClose.addEventListener("click", function () {
    authModal.close();
  });
});
