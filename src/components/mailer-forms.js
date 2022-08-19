const btnForm = document.querySelector(".confirm-button");

const loader = document.querySelector(".loader");

const fields = document.querySelectorAll("input");

function mailerForm() {
  function displayMsg(msg) {
    let msgForUser = document.querySelector(".msg-for-user");

    msgForUser.style.display = "flex"; //defolt in css display:none

    msgForUser.innerHTML += `${msg} <br><br>`;

    setTimeout(() => {
      msgForUser.style.display = "none";
      msgForUser.innerHTML = "";
    }, 4000);
  }

  function validatePhone(phone) {
    let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (phone !== false && pattern.test(phone)) {
      return true;
    } else {
      displayMsg("Введіть правильний номер");
      return false;
    }
  }

  function validateEmail(email) {
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(email)) {
      return true;
    } else {
      displayMsg("Введіть правільну пошту");
      return false;
    }
  }

  btnForm.addEventListener("click", (e) => {
    e.preventDefault();
    loader.style.display = "block";
    var valuesInput = {};

    fields.forEach((field) => {
      const { name, value } = field;
      valuesInput[name] = value; //if input empty we save false in object else we save value of input
    });

    if (
      valuesInput.name === "" ||
      valuesInput.email === "" ||
      valuesInput.phone === "" ||
      validateEmail(valuesInput.email) === false ||
      validatePhone(valuesInput.phone) === false
    ) {
      displayMsg("Заповніть усі поля корректно");
      loader.style.display = "none";
    } else {
      setTimeout(() => {
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "aleksandrignashov42@gmail.com",
          Password: "DB964427927B5971C90B0BFCEDB9191FBFA5",
          To: "aleksandrignashov42@gmail.com",
          From: "aleksandrignashov42@gmail.com",
          Subject: "Інформація про кліента",
          Body: `Інформація від кліента: ім'я ${valuesInput["name"]}, пошта: ${valuesInput["email"]}, телефон: ${valuesInput["phone"]}`,
        }).then((message) => {
          if (message === "OK") {
            loader.style.display = "none";
            displayMsg("Ми з вами зв'яжемося найближчим часом");
          } else {
            loader.style.display = "none";
            displayMsg("Щось пішло не так! Ми скоро це виправимо.");
          }
        });
      }, 2000);
      //script of mailer connected in index html file
    }
  });
}

module.exports = mailerForm;
