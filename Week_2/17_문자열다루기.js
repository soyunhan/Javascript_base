function solution(s) {

    var answer = true;
    // 문자열 길이가 4 또는 6이 아니면 false 반환
    if (s.length !== 4 && s.length !== 6) {
      return false;
    }
    
    // 문자열이 숫자로만 이루어져 있지 않으면 false 반환
    if (/[^0-9]/.test(s)) {
      return false;
    }
    
    // parseInt() 함수는 문자열을 정수로 변환하는 JavaScript 내장 함수입니다. 
    const num1 = parseInt(s);
    return !isNaN(num1);
  }