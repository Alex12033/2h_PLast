require("../../scss/modal/modal.scss");

function modal() {
  // Modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide"); // modal.classList.toggle('show'); Альтернативный вариант вывода модалки без скроллинга
    document.body.style.overflow = "hidden";
    clearInterval(modalTimeId);
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show"); // modal.classList.toggle('show'); Альтернативный вариант вывода модалки без скроллинга
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimeId = setTimeout(openModal, 5000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  // //CONTACT US

  // const contactUs = document.querySelector(".contact-us");

  // contactUs.addEventListener("click", () => {
  //   modal.classList.add("show");
  //   modal.classList.remove("hide");
  //   document.body.style.overflow = "hidden";
  //   clearInterval(modalTimeId);
  // });
}


module.exports = modal;
