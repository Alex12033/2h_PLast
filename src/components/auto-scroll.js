require("../scss/auto-scroll.scss");

function autoScroll() {
  let scrollBtn = document.querySelector(".scroll-to-top");

  let aboutUsLink = document.querySelector("#about-us");

  let contacts = document.querySelector(".contact-form");
  console.log(contacts);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > "1000") {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 1, behavior: "smooth" });
  });

  aboutUsLink.addEventListener("click", (e) => {
    e.preventDefault();

    contacts.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

module.exports = autoScroll;
