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

const callClicks = document.querySelectorAll(".call-btn");
for (const callBtn of callClicks) {
  callBtn.addEventListener("click", function () {
    alert(`📞Calling `);
  });
}
