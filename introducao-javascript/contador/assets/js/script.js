let currentNumberWrapper = document.getElementById('currentNumber');
let addNumber = document.getElementById('adicionar');
let subNumber = document.getElementById('subtrair');
let currentNumber = 0;

addNumber.addEventListener('click', increment);
subNumber.addEventListener('click', decrement);

function increment() {
  if (currentNumber == 10) {
    addNumber.disabled = true;
  } else {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
  }
  addNumber.disabled = false;
}

function decrement() {
  if (currentNumber == -10) {
    subNumber.disable = true;
  } else {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}
