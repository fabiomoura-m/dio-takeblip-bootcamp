function mapSemThis(array) {
  // utilizando arrow
  return array.map(item => item * 2);

  // return array.map(function (item) {
  //   return item * 2;
  // });
}

const nums = [2, 4, 5, 6, 7];

console.log(mapSemThis(nums));

console.log(nums);
