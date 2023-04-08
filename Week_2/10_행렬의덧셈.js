function solution(a, b) {
    //배열 초기화
    var result =  [[]];
    //배열의 길이로 순회
     for(let i =0; i < a.length ; i++){
        //map함수로 돌면서 해당 위치값을 더해서 x에 반환해서 result에 푸시
        result.push(a[i].map((x, y) =>  a[i][y] + b[i][y]))
     }
    return result;
}
console.log(solution([[1,2],[2,3]] , [[3,4],[5,6]]))