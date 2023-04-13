// 설명) "OOXXOXXOOO"와 같은 OX문의 결과가 있다.
// O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.
// 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
// (단,  OX문의 결과는 0보다 크고 80보다 작은 문자열이 주어진다.
// 또한 문자열은 O와 X만으로 이루어져 있다.


// OOXXOXXOOO	10
// OXOXOXOXOXOXOX	7
// OOOOOOOOOO	55

function solution(n){
    let answer = ''
    const regex = /(O+)/g;
    const matches = n.match(regex);
    const scores = matches.map(match => {
      const length = match.length;
      return (length * (length + 1)) / 2;
    });
    answer = scores.reduce((acc, cur) => acc + cur, 0);
    return answer
}



console.log(solution('OOXXOXXOOO'))

// 최종값을 받을 answer를 초기화 해 주었고

// 저는 정규화로 문자열에서 O를 모두 매치하였습니ㅏ.

// match함수를 이용해 n에서 매치된 모든 연속된 O의 문자열을 배열로 저장하였습니다.

// matches 배열의 각 요소의 길이에 따라 점수를 계산하기 위해 map() 함수를 사용했습니다.
   
// matches 배열의 각 요소의 길이에 따라 점수를 계산하기 위해 map() 함수를 사용했습니다.

// length로 해당 배열의 길이를 구해서

// 문자열의 길이를 이용하여 점수를 계산하기위해 길이가 서로 다른 1부터 n개의 합을 계산해서 반환하여습니다.

// 반환된값을 리듀스로 처리하여 앤서에 반환하여 값을 구했습니다.
