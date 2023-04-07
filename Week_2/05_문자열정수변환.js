
let fs = require('fs');
let n = fs.readFileSync('input.txt').toString().split(' ');


function solution(s) {
    // 문자열의 맨 앞에 있는 부호를 저장할 변수
    let sign = 1;
    
    // 문자열의 첫 번째 문자가 '+' 또는 '-'인 경우 해당 부호를 기억하고, 문자열에서 제거
    if (s[0] === '-') {
      sign = -1;
      s = s.substring(1);
    } else if (s[0] === '+') {
      s = s.substring(1);
    }
    
    // 문자열을 숫자로 변환하여 부호를 적용한 값을 반환
    return sign * Number(s);
  }
  
  console.log(solution(n));

// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.