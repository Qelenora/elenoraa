const otpCont = document.getElementById("box");
const generateBtn = document.getElementById("Fefresh");

function generateOTR() {
  otpCont.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 10);

    const digitElement = document.createElement("div");
    digitElement.classList.add("otp-digit");
    digitElement.textContent = randomNumber;

    otpCont.appendChild(digitElement);
  }
}

generateBtn.addEventListener("click", generateOTR);
