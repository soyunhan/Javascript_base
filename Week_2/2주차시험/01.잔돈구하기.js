// 설명) 르탄이가 1000원을 가지고 편의점에서 물건을 사려고 한다. 

// 편의점에는 500원, 100원, 50원, 10원이 충분히 있고,
//편의점 직원은 언제나 거스름돈 개수가 가장 적게 잔돈을 준다. 

// 르탄이가 편의점에서 물건을 사고 1000원 지폐 한 장을 냈을 때, 받을 잔돈의 개수를 구하는 프로그램을 작성하여라. 
// (단, 물건의 가격은 10원 이상 1000원 미만이며, 1원 단위는 고려하지 않는다.) 
// 900	1
// 550	5
// 320	6

function solution(n){
    let answer = 0;
    const coins = [500, 100, 50, 10];
    const rtan = 1000;
    let changes = rtan - n;
    coins.forEach(coin => {
        while(changes >= coin) {
            changes -= coin;
            answer++
        }
    })
    return answer
}

console.log(solution(320))


// 일단 받을 잔돈의 갯수를 넣을 변수로 answer를 초기화 해주었습니다.

// 그다음 상수로 잔돈의 종류를 배열로 받았습니다.

// 다음은 르탄이의 돈을 상수로 넣어주고

// 르탄이의 돈과 인자로 받은 900원을 changes로 넣었습니다.

// 잔돈의 배열을 포이치로 돌면서 하나씩 남은 잔돈과 비교하여 잔돈이 배열에 든 거스름돈 보다 크면 

// 잔돈에서 해당 코인을 빼고 잔돈의 갯수를 반환하는 answer에 카운트 1을 해주었습니다.

