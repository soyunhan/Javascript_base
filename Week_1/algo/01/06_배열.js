let fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().split('\n');


// let n = Number(input[0]);
// let arr = input[1].split(' ').map(Number);
// /*
// 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
// */
// let minValue = 1000001; // 일단 큰 수로 초기화
// let maxValue = -1000001; // 일단 작은 수로 초기화
// for (let i = 0; i < n; i++) {
//   if (minValue > arr[i]) minValue = arr[i];
//   if (maxValue < arr[i]) maxValue = arr[i]; } 
// console.log(minValue, maxValue);


// let n = Number(input[0]);
// console.log(n)
// let data = input[1].split(' ').map(x => Number(x));
// console.log(data);
// let minValue = data.reduce((a, b) => Math.min(a, b));
// let maxValue = data.reduce((a, b) => Math.max(a, b));
// console.log(minValue + " " + maxValue);