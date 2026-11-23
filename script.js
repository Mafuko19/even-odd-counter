const numbers = [10, 15, 22, 33, 40, 7, 18];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++
  } else {
    oddCount++
  }
}
console.log(evenCount) // 4
console.log(oddCount) // 3
