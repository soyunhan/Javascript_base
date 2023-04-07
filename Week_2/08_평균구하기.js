
function solution(arr) {
    let answer = 0;
    let avg = 0;
    
    for(let i = 0; i < arr.length; i++){
        avg += arr[i];
    }
    
    answer = avg / arr.length; 
    return answer;
}

console.log(solution([1,2,3,4]));