function solutions(strings, n) {
    // 배열의 sort() 메소드는 인자로 비교함수를 받습니다.
    // 이 비교함수는 배열의 두 요소를 비교하여 정렬 순서를 결정합니다. 
    // a[n]이 더 작은 경우 -1, a[n]이 더 큰 경우 1, 같은 경우 0을 반환하는 조건 
    return strings.sort((a, b) => a[n] < b[n] ? -1 : a[n] > b[n] ? 1 : 0);
}

console.log(solutions(["sun", "bed", "car"], 1));// ["car", "bed", "sun"]