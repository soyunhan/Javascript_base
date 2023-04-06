

const prompt = require('prompt-sync')();

// 결과값 받기
let result = randomN();

//3자리 랜덤숫자 생성해서 결합
function randomN(){
    let numbers = [];
    while(numbers.length < 3){
        let number = Math.floor(Math.random() * 10);
        if(!numbers.includes(number)){ numbers.push(number);}
    }
    return numbers.join('')
}

// result값 check값 비교해서 맞는지 체크
function checkN(result, check){
		//스트라이트, 볼 초기화
    let strike = 0;
    let ball = 0;
		//순회하면서 숫자 비교 
    for(let i = 0 ; i < 3 ; i++){
        if(result[i] === check[i]){
            strike++;
        }else if(result.includes(check[i])){
            ball++;
        } 
    }
    return{ strike, ball};
}

//스트라이크 볼로 힌트 제공, 3자리가 맞으면 시도횟수 출력하고 끝!
let trys = 0;
while(trys >= 0){
    let check = prompt('3자리 숫자 입력');
    trys++;

    let answer = checkN(result, check)
    if(answer.strike === 3){
        console.log(`완료! ${trys}번 시도 게임 종료!`);
        break;
    } else {
        console.log(`${answer.strike}S${answer.ball}B`);
    }
}

