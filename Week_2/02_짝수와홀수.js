
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
//     var answer = ''; // 빈 문자열 변수 answer를 선언한다.
//     //삼항연산자 리팩토링
//     return (num % 2 === 0 ? answer = 'Even' : answer = 'Odd'); // answer를 반환한다.
// }

// // solution 함수를 호출하고, 인자로 2를 전달하여 출력한다.
// console.log(solution(2));

//filter예제
// const arr1 = ['박수호', '건담', '레고', '헬로카봇']
// const result = arr1.filter( arr1 => arr1.length > 2);
// console.log(result)

//filter예제2
// function isBigEnought(value){
//     return value >= 20
// }
// var fillered = [12 ,5 ,39 ,29 ,18 ,5 ,3].filter(isBigEnought);
// console.log(fillered);


//map 예제1
// const arr1 = [1 , 4, 9 ,16]
// const map1 = arr1.map(x => x * 2)
// console.log(map1);


//map 예제2  활용해 배열 속 객체를 재구성
// let arr1 = [
//     {key:1 , value: 10},
//     {key:2 , value: 20},
//     {key:3 , value: 30},
// ]

// let reformatArr = arr1.map(function(obj){
//     var robj ={};
//     robj[obj.key] = obj.value
//     return robj
// })

// console.log(arr1);

//map 예제3 인자로 사용하여 배열 재구성
let arr = [1,2,3,4]
let result = arr.map(function(num){
    return num * 2
})

console.log(arr)
