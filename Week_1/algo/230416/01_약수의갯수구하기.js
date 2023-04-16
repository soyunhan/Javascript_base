function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        // 제곱근이 정수면 약수의 개수는 홀수
        if (Number.isInteger(Math.sqrt(i))) { 
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

console.log(solution(13, 17))