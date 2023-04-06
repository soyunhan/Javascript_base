// 주어진 문자열 배열(strings)을 n번째 문자열을 기준으로 오름차순 정렬하는 함수
const solutions = (strings, n) =>
  strings.sort((a, b) => a[n].localeCompare(b[n]));

// ["sun", "bed", "car"] 배열을 n = 1로 정렬하여 결과 출력
console.log(solutions(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"] // ["sun", "bed", "car"] 배열을 n = 1로 정렬하여 결과 출력하는 코드
