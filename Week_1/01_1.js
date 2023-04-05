function solution(absolutes, signs) {
    //sum값 초기화
    let sum = 0;

    //absoultes 순회해서 sings 값이 ture면 더하고 false면 뺀다
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            sum += absolutes[i];
        } else {
            sum -= absolutes[i];
        }
    }
    //sum 리턴값 반환
    return sum;
}

console.log(solution([1, 2, 3], [true, false, true])); // 2
console.log(solution([1, 2, 3], [false, false, true])); // 0