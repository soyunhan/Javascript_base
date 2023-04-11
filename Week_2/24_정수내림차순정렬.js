// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
//  예를들어 n이 118372면 873211을 리턴하면 됩니다.

// function solution(n) {
//     var answer = [];
//     //숫자 -> 문자열 -> 배열로 반환
//     const modi = n.toString().split('');
//     //유사배열객체로 배열객체로 받은 값을 숫자로 변환
//     let arr = Array.from(modi, Number).sort().reverse().join('')
//     return arr;
// }

function solution(n) {
    // n을 문자열로 바꾼다음에 split로 각각 나눠줬다.
    var answer = String(n).split('');
    // sort()로 정렬을 해서 reverse 반대로 한다음에 join으로 다시 문자열로 만들어 줬다.
    answer = answer.sort().reverse().join("")
    // 문자열이니까 다시 숫자타입으로 리턴
    return Number(answer);
}

console.log(solution(12345))