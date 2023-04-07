// fs 모듈을 불러온다.
let fs = require('fs');
// input.txt 파일을 읽어와서 문자열로 변환한 후 공백을 기준으로 나눈다.
let n = fs.readFileSync('input.txt').toString().split(' ');


let a = Number(n[0])
let b = Number(n[1])
console.log(a)


function solution(a, b) {
    var answer = 0;
    if(a < b){
        for(let i = a ; i <=b ; i++){
            answer += i
        }
    }else if(a > b){
        for(let i = b ; i <= a; i++){
            answer += i
        }
    }
    return answer;
}

console.log(solution(a ,b))

//두 수를 따로따로 가져온다
//수의 갯수로 돌려준다
//처음 수가 크면 두수를 바꿔준다
