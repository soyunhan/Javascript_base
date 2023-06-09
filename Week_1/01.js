function solution(s) {
  // p와 y를 갯수를 담을 변수 초기화
  let pNum = 0;
  let yNum = 0;

  //s를 순회하며 p와 y의 갯수를 구하기(toLowerCase로 소문자 통일)
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === "p") {
      // p의 갯수 구하기
      pNum++;
    } else if (s[i].toLowerCase() === "y") {
      // y의 갯수 구하기
      yNum++;
    }
  }

  //p와 y 갯수 비교하여 리턴값 반환
  return pNum === yNum ? true : false;
}

console.log(solution("pPoooyY")); //true
console.log(solution("Pyy")); // false
