console.log(document);
// heart-btn

let count = 0;
const clickHearts = document.getElementsByClassName("heart-btn");
console.log(clickHearts);

for (let clickHeart of clickHearts) {
  clickHeart.addEventListener("click", function () {
    count++;
    document.getElementById("heart-number").innerText = count;
    console.log(count);
  });
}

//cope-btn

const clickCopes = document.querySelectorAll(".copy-btn");
for (const copyBtn of clickCopes) {
  copyBtn.addEventListener("click", function () {
    const copeClick = copyBtn.parentNode.parentNode.children[2].children[0].innerText;
    alert(`${copeClick}`);
    count++;
    document.getElementById("cope-number").innerText = count;
    navigator.clipboard.writeText(copeClick);
  });
}

// call-btn

const callClicks = document.querySelectorAll(".call-btn");
for (const callBtn of callClicks) {
  callBtn.addEventListener("click", function () {
  
    const clickCall = callBtn.parentNode.parentNode.children[1].children[0].innerText;
    const clickNum = callBtn.parentNode.parentNode.children[2].children[0].innerText;
    const coinPoint = callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[1].children[0].innerText;

    const totalPoint = document.getElementById("coin-point").innerText;

    if (  Number(totalPoint) < 20) {
      alert(`❌ call is not being made because you have less than 20 coins`)
      return;
    }

    const currentTotal = Number(totalPoint) - 20;
   document.getElementById("coin-point").innerText = currentTotal;
    
  
    
    alert(`📞Calling  ${clickCall} : ${clickNum}`);
   
    const asideContainer =document.getElementById("cart-container");
    const newCard = document.createElement("div");
    newCard.innerHTML= ` 
        <div class="flex justify-between items-center">
              <div>
                <h3 class="font-[700] text-[15px]">${clickCall}</h3>
                <h3 class="font-[700] text-[15px]">${clickNum}</h3>
               </div>
              <div class="font-[700]">${new Date().toLocaleTimeString([],{hour:"2-digit", minute:"2-digit",hour12:true})}</div>
        </div>`;
    asideContainer.append(newCard);

  });

}
// clear-btn 

   document.getElementById("clear-btn").addEventListener("click", function (id) {
     const cartContainer = document.getElementById("cart-container").innerHTML = "";

  })
