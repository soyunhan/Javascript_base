
// function solution(num) {
//     var answer = ''; // 빈 문자열 변수 answer를 선언한다.
//     if(num % 2 === 0){ // 만약 num이 2로 나누어 떨어지면
//         answer = 'Even' // answer에 'Even'을 할당한다.
//     }else{ // 그렇지 않으면
//         answer = 'Odd' // answer에 'Odd'를 할당한다.
//     }
//     return answer; // answer를 반환한다.
// }

// console.log(solution(2)); // solution 함수를 호출하고, 인자로 2를 전달하여 출력한다.


// function solution(num) {
//     var answer = '';
//     return answer; 
// }


// console.log(solution(2));
const name = 'Global';

const person = {
  name: 'John',
  hello() {
    console.log(this.name); // John
  }
};

person.hello();