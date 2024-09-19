const button = document.getElementById("changeLight");
const message = document.getElementById("message");
const lights = ["red", "yellow", "green"];
let currentLightIndex = 0;

button.addEventListener("click", () => {
  document.getElementById("red").style.opacity = "0.3";
  document.getElementById("yellow").style.opacity = "0.3";
  document.getElementById("green").style.opacity = "0.3";

  currentLightIndex = (currentLightIndex + 1) % lights.length;

  const currentLight = lights[currentLightIndex];
  document.getElementById(currentLight).style.opacity = "1";

  switch (currentLight) {
    case "red":
      message.textContent = "Стой";
      message.style.color = "red";
      break;
    case "yellow":
      message.textContent = "Жди";
      message.style.color = "yellow";
      break;
    case "green":
      message.textContent = "Иди";
      message.style.color = "green";
      break;
  }
});
