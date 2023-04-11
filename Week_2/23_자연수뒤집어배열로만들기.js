// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
    var answer = [];
    //숫자 -> 문자열 -> 배열로 반환
    const modi = n.toString().split('').reverse();
    //유사배열객체로 배열객체로 받은 값을 숫자로 변환
    let arr = Array.from(modi, Number)
    return arr;
}

console.log(solution(12345))