// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수,
// solution을 완성해주세요.

function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {

    if (n % i === 0) {
        answer += i
      }
        // console.log(i)
        // 제곱근이 정수면 약수의 개수는 홀수
        // console.log(Math.floor(Number(Math.sqrt(i))))
    }
    return answer;
}


console.log(solution(12))