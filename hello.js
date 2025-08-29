document.addEventListener("DOMContentLoaded", () => {


  const coinEl = document.getElementById("coin-point");        
  const heartEl = document.getElementById("heart-number");     
  const copeEl = document.getElementById("cope-number");       
  const cardContainer = document.getElementById("card-container");
  const historyAside = document.getElementById("aside-container");
  const clearBtn = document.getElementById("Clear-btn");

  // 
  const getInt = (el) => parseInt(el.textContent.trim()) || 0;

  
  const getCardInfo = (btn) => {
    const card = btn.closest(".bg-white.rounded-xl.shadow") || btn.closest(".w-[card]");
    if (!card) return { title: "", number: "" };

    const title = card.querySelector("h4")?.textContent.trim() || "";
    const number = card.querySelector("h1")?.textContent.trim() || "";
    return { title, number };
  };

  //time
  const addToHistory = (service, number) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();

    const div = document.createElement("div");
    div.className = "border rounded-md bg-gray-100 px-3 py-2 mb-2 flex justify-between";

    div.innerHTML = `
      <div class="flex flex-col">
        <span class="font-semibold">${service}</span>
        <span class="text-sm text-gray-600">${number}</span>
      </div>
      <div class="text-sm text-gray-700">${timeStr}</div>
    `;

    historyAside.appendChild(div);
  };

  // Event delegation on all cards
  cardContainer.addEventListener("click", (e) => {
    const heartBtn = e.target.closest("img#heart-card");
    const callBtn = e.target.closest("button#call-btn");
    const copeBtn = e.target.closest("button#real-cope-btn");

    // ❤️ Heart click
    if (heartBtn) {
      heartEl.textContent = getInt(heartEl) + 1;
      return;
    }

    // 📞 Call click
    if (callBtn) {
      let coins = getInt(coinEl);
      const { title, number } = getCardInfo(callBtn);

      if (coins < 20) {
        alert("call is not being made because you have less than 20 coins");
        return;
      }

      coins -= 20;
      coinEl.textContent = coins;

      alert(`📞Calling ${title} - ${number}`);
      addToHistory(title, number); 
      return;
    }

    //  Cope click
    if (copeBtn) {
      const { number } = getCardInfo(copeBtn);
      copeEl.textContent = getInt(copeEl) + 1;
      alert(`${number}`)
      return;
    }
  });

  // Clear history
  clearBtn.addEventListener("click", () => {
    historyAside.querySelectorAll("div.border").forEach(el => el.remove());
  });

});
  