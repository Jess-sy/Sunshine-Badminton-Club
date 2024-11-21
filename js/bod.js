document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from reaching the document
      const textBox = this.parentNode;
      textBox.classList.toggle("active");
    });
  });

  document.addEventListener("click", function () {
    // Close all active text boxes when clicking outside
    const activeTextBoxes = document.querySelectorAll(".text-box.active");
    activeTextBoxes.forEach((textBox) => {
      textBox.classList.remove("active");
    });
  });
});
