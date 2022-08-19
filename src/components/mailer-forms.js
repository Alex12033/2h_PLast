const btnForm = document.querySelector(".confirm-button");

const loader = document.querySelector('.loader');

const fields = document.querySelectorAll("input");

function mailerForm() {
  btnForm.addEventListener("click", (e) => {
    e.preventDefault();
    loader.style.display = "block";
    var valuesInput = {};

    fields.forEach((field) => {
      const { name, value } = field;
      valuesInput[name] = value == "" ? false : value; //if input empty we save false in object else we save value of input
    });

    setTimeout(() => {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "aleksandrignashov42@gmail.com",
            Password: "DB964427927B5971C90B0BFCEDB9191FBFA5",
            To: "aleksandrignashov42@gmail.com",
            From: "aleksandrignashov42@gmail.com",
            Subject: "Інформація про кліента",
            Body: `Інформація від кліента: ім'я ${valuesInput["name"]}, пошта: ${valuesInput["email"]}, телефон: ${valuesInput["phone"]}`,
          }).then((message) => loader.style.display = "none");
    }, 2000)
  }); //script of mailer connected in index html file
}

module.exports = mailerForm;
