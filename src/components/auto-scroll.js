// Note: import styles directly in Pug or in SCSS

function autoScroll() {
  let scrollBtn = document.querySelector(".scroll-to-top");

  let aboutUsLink = document.querySelector("#about-us");
  let contacts = document.querySelector(".contact-form");

  let seeServicesBtn = document.querySelector(".services-btn");
  let services = document.querySelector(".our-services");

  let viewMoreBtn = document.querySelectorAll(".view-more");

  let tabBtn = document.querySelectorAll(".tab-button");



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

  seeServicesBtn.addEventListener("click", (e) => {
    e.preventDefault();

    services.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  viewMoreBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      contacts.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  })

  tabBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      contacts.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  })
}

module.exports = autoScroll;