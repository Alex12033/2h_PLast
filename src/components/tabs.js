require("../scss/index.scss");
require("../scss/header.scss");
require("../scss/experience.scss");
require("../scss/main-services.scss");
require("../scss/our-services.scss");
require("../scss/footer.scss");
require("../scss/reasons.scss");
require("../scss/projects.scss");
require("../scss/contact-form.scss");

function tabs() {
  let tabs = document.querySelector(".tabs-variants"); //btns for change tab

  //we gets tabs id for what hide one of them when we click on another tab
  let comercialTab = document.querySelector("#comercial");
  let residentialTab = document.querySelector("#residential");
  let industrialTab = document.querySelector("#industrial");

  let comercialBtn = document.querySelector(".comercial");
  let residentialBtn = document.querySelector(".residential");
  let industrialBtn = document.querySelector(".industrial");

  function removeExtractor(target) {
    let getTarget = document.querySelector(target);
    getTarget.classList.remove("extractor-tabs");
  }

  tabs.addEventListener("click", (event) => {
    console.log(event.target.className);

    if (
      event.target.id === "residential__tab-identify" ||
      event.target.className === "residential-image-btn" ||
      event.target.className === "residential-text-btn"
    ) {
      residentialBtn.classList.add("extractor-tabs");

      removeExtractor(".industrial");

      industrialTab.style.display = "none";

      residentialTab.style.display = "flex";
    }

    if (
      event.target.id === "industrial__tab-identify" ||
      event.target.className === "industrial-image-btn" ||
      event.target.className === "industrial-text-btn"
    ) {
      industrialBtn.classList.add("extractor-tabs");

      removeExtractor(".residential");

      residentialTab.style.display = "none";

      industrialTab.style.display = "flex";
    }
  });
}

module.exports = tabs;
