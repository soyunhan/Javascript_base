// // fs 모듈을 불러온다.
// let fs = require('fs');
// // input.txt 파일을 읽어와서 문자열로 변환한 후 공백을 기준으로 나눈다.
// let n = fs.readFileSync('input.txt').toString().split(' ');

// /// 첫 번째 숫자를 변수 a에 할당한다.
// let a = Number(n[0])
// // 두 번째 숫자를 변수 b에 할당한다.
// let b = Number(n[1])

// // 별 모양을 저장할 빈 문자열을 만든다.
// let star = "";
// // b번 반복하는 반복문
// for (let i = 0; i < b; i++) {
//     // a번 반복하는 반복문
//     for (let j = 0; j < a; j++){
//         // 별 모양을 star 문자열에 추가한다.
//         star += '*'
//     }
//     // 한 줄의 별 모양이 완성되면 줄바꿈 문자를 추가한다.
//     star += "\n";  
// }
// // 별 모양이 저장된 문자열을 출력한다.
// console.log(star)

let fs = require('fs');
let n = fs.readFileSync('input.txt').toString().split(' ');

let a = n[0]
let b = n[1]

//Array.from 유사배열객체로 변환
let result = []
for(let i =0; i< b ; i++){
    result = Array.from({ length: a }, () => "*").join("")
};
console.log(result);

