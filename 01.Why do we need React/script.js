let firstBasket = document.querySelector(".basket-1 span");
let secondBasket = document.querySelector(".basket-2 span");

const totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

document.querySelector(".left-arrow").addEventListener("click", () => {
    if (firstBasketAppleCount < 10) {
      firstBasketAppleCount++;
      firstBasket.innerText = firstBasketAppleCount;
      secondBasketAppleCount--;
      secondBasket.innerText = secondBasketAppleCount;
    }
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  if (secondBasketAppleCount < 10) {
    firstBasketAppleCount--;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount++;
    secondBasket.innerText = secondBasketAppleCount;
  }
});
