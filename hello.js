// document.addEventListener("DOMContentLoaded", () => {


//   const coinEl = document.getElementById("coin-point");
//   const heartEl = document.getElementById("heart-number");
//   const copeEl = document.getElementById("cope-number");
//   const cardContainer = document.getElementById("card-container");
//   const historyAside = document.getElementById("aside-container");
//   const clearBtn = document.getElementById("Clear-btn");

//   //
//   const getInt = (el) => parseInt(el.textContent.trim()) || 0;

  
//   const getCardInfo = (btn) => {
//     const card = btn.closest(".bg-white.rounded-xl.shadow") || btn.closest(".w-[card]");
//     if (!card) return { title: "", number: "" };

//     const title = card.querySelector("h4")?.textContent.trim() || "";
//     const number = card.querySelector("h1")?.textContent.trim() || "";
//     return { title, number };
//   };

//   //time
//   const addToHistory = (service, number) => {
//     const now = new Date();
//     const timeStr = now.toLocaleTimeString();

//     const div = document.createElement("div");
//     div.className = "border rounded-md bg-gray-100 px-3 py-2 mb-2 flex justify-between";

//     div.innerHTML = `
//       <div class="flex flex-col">
//         <span class="font-semibold">${service}</span>
//         <span class="text-sm text-gray-600">${number}</span>
//       </div>
//       <div class="text-sm text-gray-700">${timeStr}</div>
//     `;

//     historyAside.appendChild(div);
//   };

//   // Event delegation on all cards
//   cardContainer.addEventListener("click", (e) => {
//     const heartBtn = e.target.closest("img#heart-card");
//     const callBtn = e.target.closest("button#call-btn");
//     const copeBtn = e.target.closest("button#real-cope-btn");

//     // ❤️ Heart click
//     if (heartBtn) {
//       heartEl.textContent = getInt(heartEl) + 1;
//       return;
//     }

//     // 📞 Call click
//     if (callBtn) {
//       let coins = getInt(coinEl);
//       const { title, number } = getCardInfo(callBtn);

//       if (coins < 20) {
//         alert("call is not being made because you have less than 20 coins");
//         return;
//       }

//       coins -= 20;
//       coinEl.textContent = coins;

//       alert(`📞Calling ${title} - ${number}`);
//       addToHistory(title, number);
//       return;
//     }

//     //  Cope click
//     if (copeBtn) {
//       const { number } = getCardInfo(copeBtn);
//       copeEl.textContent = getInt(copeEl) + 1;
//       alert(`${number}`)
//       return;
//     }
//   });

//   // Clear history
//   clearBtn.addEventListener("click", () => {
//     historyAside.querySelectorAll("div.border").forEach(el => el.remove());
//   });

// });


// console.log(document);

// function getElement(id) {
//   const element = document.getElementById(id);
//   return element;
// };

// document.getElementById('callbtn').addEventListener('click', function () {
//   const title = getElement('em-number').innerText;
//   const num = getElement('Ntl-num').innerText;

//   alert(`📞Calling ${title} : ${num}`);
  
//   // total coin
//     const totalCoin = getElement('coin-point').innerText;
//    result = totalCoin - 20;
//   getElement('coin-point').innerText = result;
       
//   if (result < 20) {
//         alert(`❌call is not being made because you have less than 20 coins`);
      
//   }

//      // aside a container add kora
//      const cartContainer = getElement('cart-container');
//      const newCart = document.createElement("div");
//   newCart.innerHTML = ` 
//        <div class="flex">
//               <div>
//                 <h1 class="font-bold text-[15px]">National Emergency Number</h1>
//                 <h3 class="font-bold text-[15px]">999</h3>
//               </div>
//               <div>
//                 <h1 class="font-bold text-[15px]">Time</h1>
//               </div>
//         </div>`;
//     cartContainer.append(newCart);
  
// })

let count = 0;
const clickHearts = document.getElementsByClassName('heart-btn');
console.log(clickHearts);

for (let clickHeart of clickHearts) {
  clickHeart.addEventListener('click', function () {
    count++;
   document.getElementById('heart-number').innerText = count;
    console.log(count);
   
  })


}

const clickCopes = document.querySelectorAll('.cope-btn');
console.log(clickCopes);
for (let clickCope of clickCopes) {
  
  clickCope.addEventListener('click', function (event) {
    event.stopPropagation()
    const copeClick = clickCope.parentNode.parentNode.children[2].children[0].innerText;
    // console.log(copeClick);

    alert(`${copeClick}`),count++;
    document.getElementById('cope-number').innerText = count;
  
  })
}

const callClicks = document.querySelectorAll('.call-btn');
console.log(callClicks);

for (let callClick of clickCopes) {
  callClick.addEventListener('click', function () {
   alert(`📞Calling `);

  })  

}
