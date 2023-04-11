// 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의
// 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록
// solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// participant
// completion 길이는  participant -1
// 1개 이상 20개 이하의 알파벳 소문자
// 참가자 중에는 동명이인이 있을 수 있습니다.


//동명이인
// function solution(...array) {
//     answer = array.reduce((result, currentArray) => { return [...result, ...currentArray]}, []);
//     let difference = array[0].filter(x => !array[1].includes(x))
//     .concat(array[1].filter(x => !array[0].includes(x))).join('');
    
//     return difference;
// }


// let participant = ["홍길동", "김철수", "박영희", "홍길동"];
// let completion = ["김철수", "박영희", "홍길동"];
// 이 경우 participant 배열을 정렬하면 ["김철수", "박영희", "홍길동", "홍길동"]이 됩니다.
// 그리고 participant 배열과 completion 배열을 순서대로 비교하면서, 중복된 이름이 있어도 순서대로 비교하게 됩니다.
// 즉, "김철수"와 "김철수"를 비교하고, "박영희"와 "박영희"를 비교하고, "홍길동"과 "홍길동"을 비교하면서,
// 마지막으로 "홍길동"과 비교가 되는데 이 때 첫 번째 "홍길동"은 completion 배열에서 삭제되었으므로,
// 두 번째 "홍길동"이 완주하지 못한 참가자가 됩니다.

function solution(participant, completion) {
    var answer = "";
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i += 1) {
      if (participant[i] !== completion[i]) return answer = participant[i];
    }
  }


//   const solution = (p, c) => {
//     p.sort()
//     c.sort()
//     while (p.length) {
//         let pp = p.pop()
//         if (pp !== c.pop()) return pp
//     }
// }



// 이 코드는 주어진 completion 배열을 기준으로 participant 배열에서 동명이인을 포함한 완주자들을 삭제한 다음,
// 남은 참가자를 join() 메서드를 이용하여 문자열로 변환하여 반환하는 방식입니다.

// 먼저, completion 배열을 순회하면서 indexOf() 메서드를 이용하여 c 요소가 participant 배열에서 몇 번째 인덱스에 위치하는지 찾습니다.
// 그리고 splice() 메서드를 이용하여 해당 인덱스의 요소를 제거합니다.
// 이 방법은 completion 배열에서 동명이인을 제거하지 않는다는 단점이 있습니다. 따라서 이후에 코드에서 동명이인을 제거해주어야 합니다.

// 그리고 마지막으로 participant 배열을 join() 메서드를 이용하여 문자열로 변환한 후, 반환합니다.
// 이 방법은 participant 배열이 하나의 요소만 가지고 있을 경우에는 join() 메서드로 문자열을 생성할 수 없으므로 주의해야 합니다.

// 추가로, 이 코드에서 answer 변수를 선언하지 않고 participant.join() 메서드를 바로 반환해도 무방합니다.

// function solution(participant, completion) {
//     for (const c of completion) {
//       const index = participant.indexOf(c);
//       console.log(c);
//       participant.splice(index, 1);
//     }
    
//     const answer = participant.sort().join(','); // answer = participant[0];
//     return answer;
//   }


// example code 3.

// 세 번째 접근방식은 다른 사람의 풀이에서 가장 인상 깊었던 코드.

// 언더스코어 라이브러리를 이용한 방식인데 _, $ 대신에 participant, completion으로 변경하니까 그나마 익숙한 모습의 코드가 되었다.

// 정확성은 물론이고 효율성 테스트까지 위의 속도의 절반밖에 되지 않는다니....

// 문제 카테고리 자체가 '해시 (key-value 쌍으로 데이터를 빠르게 찾아보세요)' 였으니 이게 가장 적합한 답변이 맞는 것 같다

// 설명은 문제 풀이 완료 후 '다른 사람의 풀이'를 보면 댓글에 갓 개발자님들께서 자세하게 설명해주고 계십니다 :)

// var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
// var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))