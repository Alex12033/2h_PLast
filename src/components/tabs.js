require("../scss/index.scss");
require("../scss/header.scss");
require("../scss/experience.scss");
require("../scss/main-services.scss");

function tabs() {
  let tabs = document.querySelector(".tabs-variants"); //btns for change tab

  //we gets tabs for what hide one of them when we click on another tab
  let comercialTab = document.querySelector("#comercial");
  let residentialTab = document.querySelector("#residential");
  let industrialTab = document.querySelector("#industrial");

  function removeExtractor(target) {
    let getTarget = document.querySelector(target);
    getTarget.classList.remove("extractor-tabs");
  }

  tabs.addEventListener("click", (event) => {
    if (event.target.id === "comercial__tab-identify") {
      event.target.classList.add("extractor-tabs");
      
      removeExtractor(".residential");
      removeExtractor(".industrial");

      industrialTab.style.display = "none";
      residentialTab.style.display = "none";

      comercialTab.style.display = "flex";
    }

    if (event.target.id === "residential__tab-identify") {
      event.target.classList.add("extractor-tabs");

      removeExtractor(".comercial");
      removeExtractor(".industrial");

      industrialTab.style.display = "none";
      comercialTab.style.display = "none";

      residentialTab.style.display = "flex";
    }

    if (event.target.id === "industrial__tab-identify") {
      event.target.classList.add("extractor-tabs");

      removeExtractor(".comercial");
      removeExtractor(".residential");

      comercialTab.style.display = "none";
      residentialTab.style.display = "none";

      industrialTab.style.display = "flex";
    }
  });
}

module.exports = tabs;
