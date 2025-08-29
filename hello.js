const coinEl = document.getElementById("coin-point");
const heartEl = document.getElementById("heart-number");
const copeEl = document.getElementById("cope-numper");
const cardContainer = document.getElementById("card-container");
const historyAside = document.getElementById("aside-container");
const clearBtn = document.getElementById("clear-btn");

function getInt(el) {
  return parseInt(el.textContent.trim(), 10) || 0;
};


//card theke number cope
function getCardInfo(btn) {
  const card = btn.closest(".bg-white.rounded-xl.shadow") || btn.closest(".w-[360px]");
  if (!card) {
    return { title: "", number: "" };
  }
  const title = card.querySelector("h4")?.textContent.trim() || "";
  const number = card.querySelector("h1")?.textContent.trim() || "";
  return { title, number };
};

function addToHistory(service, number) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();

  const div = document.createElement("div");
  div.className = "border rounded-md bg-gray-100 px-3 py-2 mb-2 flex justify-between";
  
  div.innerHTML = `<div class="flex flex-col"> 
  <span class="font-semibold">${service}</span>
  <span class="text-sm text-gray-600">${number}<span> </div>
  <div class="text-sm text-gray-700">${timeStr}</div>`;

  historyAside.appendChild(div);
};
cardContainer.addEventListener("click", function (e) {
  const heartBtn = e.target.closest("img#heart-card");
  const callBtn = e.target.closest("button#call-btn");
  const copeBtn = e.target.closest("button#real-cope-btn");

  // heart btn
  if (heartBtn) {
    heartEl.textContent = getInt(heartEl) + 1;
    return;
  };
  // call btn
  if (callBtn) {
    let coins = getInt(coinEl);
    const { title, number } = getCardInfo(callBtn);
  
    if (coins < 20) {
      alert("Call is not being made because you have less than 20 coins");
      return;
    };
    coinEl.textContent = coins - 20;
    alert(`📞Calling ${title} -${number}`);
    addToHistory(title, number);
    return;
  };

  //text cope
  if (copeBtn) {
    const { number } = getCardInfo(copeBtn);
    copeEl.textContent = getInt(copeEl) + 1;
    alert(`Cope taken for hotline: ${number}`);
    return;
  };
  
});

  clearBtn.addEventListener("click", function () {
    let divs = historyAside.querySelectorAll("div.border");
    divs.forEach(function (el) {
      el.remove();
    });
  });