const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

// Create a text element to display the color name
const colorName = document.createElement("h2");
colorName.style.position = "absolute";
colorName.style.bottom = "30px";
colorName.style.fontSize = "4rem";
colorName.style.color = "#212121";
colorName.style.textTransform = "capitalize";
body.appendChild(colorName);

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const selectedColor = e.target.id;
    body.style.background = getComputedStyle(e.target).background; // Apply gradient if present
    colorName.textContent = selectedColor; // Update the color name
  });
});
