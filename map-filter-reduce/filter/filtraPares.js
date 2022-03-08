function filtaPares(array) {
  return array.filter(item => item % 2 === 0);
}

let nums = [1, 3, 4, 5, 6];

//Resolução da mentora

// function filtraPares(arr) {
//   return arr.filtes(callback);
// }

// function callback() {
//   return item % 2 === 0;
// }

console.log(filtaPares(nums));
