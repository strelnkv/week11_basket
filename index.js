let necklace = document.querySelector("#necklace");
let mask = document.querySelector("#mask");
let candle = document.querySelector("#candle");
let diff = document.querySelector("#diff");
let total = document.querySelector(".total");

let necklacePrice = Number(necklace.innerHTML);
let maskPrice = Number(mask.innerHTML);
let candlePrice = Number(candle.innerHTML);
let diffPrice = Number(diff.innerHTML);
let totalPrice = necklacePrice + maskPrice + candlePrice + diffPrice;

total.innerHTML = totalPrice;

document.querySelector(".button").addEventListener("click", calculateSum);

function calculateSum() {
  total.innerHTML = (totalPrice * 0.8).toFixed(1);
  necklace.innerHTML = (necklacePrice * 0.8).toFixed(1);
  diff.innerHTML = (diffPrice * 0.8).toFixed(1);
  candle.innerHTML = (candlePrice * 0.8).toFixed(1);
  mask.innerHTML = (maskPrice * 0.8).toFixed(1);
}
