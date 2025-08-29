const coinEl = document.getElementById("coin-point");
const heartEl = document.getElementById("heart-number");
const copeEl = document.getElementById("cope-numper");
const cardContainer = document.getElementById("card-container");
const historyAside = document.getElementById("aside-container");
const clearBtn = document.getElementById("clear-btn");

function getInt(el) {
  return parseInt(el.textContent.trim(), 10) || 0;
}
