const prompt = require('prompt-sync')();

// 결과값 받기
let result = randomN();

//3자리 랜덤숫자 생성해서 결합
function randomN() {
  let numbers = []; // 빈 배열 생성
  while (numbers.length < 3) {
    // 배열의 길이가 3보다 작을 때까지 반복
    let number = Math.floor(Math.random() * 10); // 0부터 9까지의 랜덤한 수 생성
    if (!numbers.includes(number)) numbers.push(number); // 생성한 수가 배열에 없으면 배열에 추가
  }
  return numbers.join(""); // 배열의 요소들을 문자열로 합쳐서 반환
}

// result값 check값 비교해서 맞는지 체크
function checkN(result, check) {
  let strikes = 0, // 스트라이크 개수 초기화
    balls = 0; // 볼 개수 초기화
  for (let i = 0; i < 3; i++) {
    // 3번 반복
    result[i] === check[i] // 결과와 체크가 같으면
      ? strikes++ // 스트라이크 개수 증가
      : result.includes(check[i]) // 결과에 체크가 포함되어 있으면
      ? balls++ // 볼 개수 증가
      : null; // 그 외의 경우는 아무것도 하지 않음
  }
  return { strikes, balls }; // 스트라이크와 볼 개수를 객체로 반환
}

//스트라이크 볼로 힌트 제공, 3자리가 맞으면 시도횟수 출력하고 끝!
let trys = 0; // 시도 횟수 초기화
while (true) {
  // 무한 반복문
  let check = prompt("3자리 숫자 입력"); // 사용자로부터 3자리 숫자 입력 받기
  trys++; // 시도 횟수 증가

  let answer = checkN(result, check); // 입력한 숫자와 정답 비교하여 결과 저장
  if (answer.strikes === 3) {
    // 3 스트라이크인 경우
    console.log(`완료! ${trys}번 시도 게임 종료!`); // 완료 메시지 출력
    break; // 반복문 종료
  } else {
    // 3 스트라이크가 아닌 경우
    console.log(`땡! ${answer.strikes}스트라이크, ${answer.balls}볼`); // 결과 출력
  }
}
