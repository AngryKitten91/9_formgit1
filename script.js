const $formData = document.querySelector("form");

$formData.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("handle form send");
});
