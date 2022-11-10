(function () {
  emailjs.init('J8NPun-Uin39jE7pH');
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
         event.preventDefault();
      // these IDs from the previous steps
      emailjs
        .sendForm('service_h86mkzt', 'template_2h4wfl4', '#contact-form')
        .then(
          function (response) {
            console.log("RÉUSSITE!", response.status, response.text);
          },
          function (error) {
            console.log("ERREUR...", error);
          }
        );
    });


};

function clearForm() {
  setTimeout(()=>
  document.getElementById("contact-form").reset(),100
  )
}

