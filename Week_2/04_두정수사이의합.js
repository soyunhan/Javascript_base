// fs 모듈을 불러온다.
let fs = require('fs');
// input.txt 파일을 읽어와서 문자열로 변환한 후 공백을 기준으로 나눈다.
let n = fs.readFileSync('input.txt').toString().split(' ');


let a = Number(n[0]) // n 배열의 첫번째 값을 a에 숫자로 변환하여 할당
let b = Number(n[1]) // n 배열의 두번째 값을 b에 숫자로 변환하여 할당
console.log(a) // a 값 출력


function solution(a, b) { // a, b 매개변수를 받는 solution 함수 선언
    var answer = 0; // answer 변수를 0으로 초기화
    if(a < b){ // a가 b보다 작은 경우
        for(let i = a ; i <=b ; i++){ // a부터 b까지 반복문 실행
            answer += i // answer에 i를 더함
        }
    }else if(a > b){ // a가 b보다 큰 경우
        for(let i = b ; i <= a; i++){ // b부터 a까지 반복문 실행
            answer += i // answer에 i를 더함
        }
    }
    return answer; // answer 반환
}

console.log(solution(a ,b)) // solution 함수에 a, b를 인자로 전달하여 결과 출력