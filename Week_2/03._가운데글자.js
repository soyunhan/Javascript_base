// fs 모듈을 불러온다.
let fs = require('fs');
// input.txt 파일을 읽어와서 문자열로 변환한 후 공백을 기준으로 나눈다.
let n = fs.readFileSync('input.txt').toString().split('\n');


function solution(s) {
    var answer = '';

    // 문자열의 길이가 짝수인 경우
    if(s.length % 2 === 0){
      let mid = Math.floor(s.length / 2) -1;
      // 가운데 두 글자를 추출하여 answer에 저장
      answer = s.substring(mid, mid + 2); 
    }else{ // 문자열의 길이가 홀수인 경우
        let mid = Math.floor(s.length / 2);
        // 가운데 한 글자를 추출하여 answer에 저장
        answer = s.substring(mid, mid + 1);
    }

    return answer;
}

console.log(solution(n[0])); // "c"
console.log(solution(n[1])); // "we"