const costPerOne = 0.02;

let calcButtons = document.querySelectorAll(".mint__content__calc-btn");
let resultElement = document.querySelector(".mint__content__total-result");
let amountElement = document.querySelector(".mint__content__calc-text");
let amount = +amountElement.textContent;

for (let calcButton of calcButtons) {
  calcButton.addEventListener("click", function () {
    if (this.classList.contains("mint__content__calc-btn--minus")) {
      if (amount >= 2) {
        minusCost(amountElement, costPerOne, resultElement);
      }
    } else if (this.classList.contains("mint__content__calc-btn--plus")) {
      plusCost(amountElement, costPerOne, resultElement);
    }
  });
}

const minusCost = (amountElement, costPerOne, resultElement) => {
  if (amount >= 2) {
    amount--;
    amountElement.textContent = amount;
    let res = (amount * costPerOne).toFixed(2);
    resultElement.textContent = res;
  }
};

const plusCost = (amountElement, costPerOne, resultElement) => {
  amount++;
  amountElement.textContent = amount;
  let res = (amount * costPerOne).toFixed(2);
  resultElement.textContent = res;
};
