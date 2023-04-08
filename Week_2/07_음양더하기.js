// function solution(absolutes, signs) {
//     let answer = 0;

//     //absoultes 순회해서 sings 값이 ture면 더하고 false면 뺀다
//     for (let i = 0; i < absolutes.length; i++) {
//         if (signs[i]) {
//             answer += absolutes[i];
//         } else {
//             answer -= absolutes[i];
//         }
//     }
//     //answer 리턴값 반환
//     return answer;
// }

// console.log(solution([4,7,12]), [true,false,true]);


function solution(absolutes, signs) {
    var answer = 0;
    for (let i = 0; i <signs.lentgh; i++){
        if (signs[i] === ture) {
            answer += absolutes[i]
        } else {
            answer -= absolutes[i]
        }
    } return answer;
}

console.log(solution([4, 7, 12],[true, false, true]));
