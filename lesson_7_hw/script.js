const prices = [1500, 400, 800, 750, 250, 8000, 150, 640, 100, 370];

function buildArrayItem(value) {
  let div = document.createElement("div");
  div.className = "array-item";
  div.textContent = value;
  return div;
}

function renderArray(array, container) {
  container.innerHTML = "";
  for (let item of array) {
    let arrayItem = buildArrayItem(item);
    container.appendChild(arrayItem);
  }
}

let $originalArray = document.querySelector("#original .array");
renderArray(prices, $originalArray);

let $updatedArray = document.querySelector("#updated .array");
renderArray(["?", "?", "?"], $updatedArray);

document.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;
  let action = event.target.textContent;

  if (action === "map -40%") {
    let updatedArray = prices.map((price) => price * 0.6);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "map в тенге") {
    let updatedArray = prices.map((price) => price * 6);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter <= 1000") {
    let updatedArray = prices.filter((price) => price <= 1000);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter ровные цены") {
    let updatedArray = prices.filter((price) => price % 100 === 0);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "максимальная цена") {
    let maxPrice = prices.reduce(
      (max, price) => Math.max(max, price),
      prices[0]
    );
    renderArray([maxPrice], $updatedArray);
  } else if (action === "минимальная цена") {
    let minPrice = prices.reduce(
      (min, price) => Math.min(min, price),
      prices[0]
    );
    renderArray([minPrice], $updatedArray);
  }
});
