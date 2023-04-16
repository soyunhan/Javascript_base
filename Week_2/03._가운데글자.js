// fs 모듈을 불러온다.
let fs = require('fs');
// input.txt 파일을 읽어와서 문자열로 변환한 후 공백을 기준으로 나눈다.
let n = fs.readFileSync('input.txt').toString().split(' ');


function solution(s) {
    var answer = '';
    let mid = Math.floor(s.length / 2)
    return (s.length % 2 === 0) ? answer = s.substring(mid -1, mid + 1) : answer = s.substring(mid, mid + 1);
}

console.log(solution(n[0])); // "c"
console.log(solution(n[1])); // "we"
