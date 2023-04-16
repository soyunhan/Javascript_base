// 패션의 선도주자 청길이는 패션의 발전을 위해 패션쇼를 방문해 유니크한 아이템을 조사하기로 하였습니다.
// 청길이는 입장하는 사람들의 패션에서 처음 보는 아이템 만을 기록합니다.
// 이때 청길이의 기록에서 아래 규칙에 맞게 배열로 출력해 주세요.

// 1. 청길이는 각 옷의 종류를 정수로 기록해 놓습니다.
// ex) 입력은 "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4" 형태의 x입니다.
// 2. 기록은 청길이가 번호 순서로 유니크한 옷의 번호를 적습니다.
// 3. 유니크한 옷은 기록된 순서로 추출되고 출력됩니다.
// ex) 출력은 [3,1,4,2]입니다.

// 식별자고정
// function addArray(...arrays) {
//     answer = arrays.reduce((result, currentArray) => { return [...result, ...currentArray]}, []);
//     // Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장
//     return [...new Set(answer)]
// }

// const arr1 = [3,1];
// const arr2 = [4];
// const arr3 = [2,1,3];
// const arr4 = [2,1,3,4];

// const result = addArray(arr1, arr2, arr3, arr4);



//식별자고정 수정
// function addArray(result) {
//     const regex = /\d+번: (\d+(,\d+)*)/g;
//     const clothList = result.match(regex).flatMap((str) => str.match(/\d+/g).slice(1))
//     answer = clothList.reduce((result, currentArray) => { return [...result, ...currentArray] }, []);
//     // Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장
//     return [...new Set(clothList)]
// }


// function addArray(data){
//     const str = data.split(/[0-9]번: /).slice(1)
//       .reduce((str, item) => {
//         const List = item.trim().split(',').map(Number);
//         return new Set([...str, ...List]);
//       }, new Set());

//     return [...str];
//   }
// const result = addArray("1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3");
// console.log(result)


function addArray(data) {
    // 우선, 정규식 /d+번: (\d+(,\d+)*)/g을 사용하여 각각의 옷 종류 목록을 추출합니다.
    // 이 정규식은 숫자+번: 숫자+쉼표+숫자+0개 이상 반복 패턴에 매치됩니다.
    const regex = /\d+번: (\d+(,\d+)*)/g;
    // match 객체는 정규식 패턴에 대한 문자열 검색 결과를 나타냅니다. 
    // match 객체는 검색된 문자열, 시작 위치, 끝 위치 등의 정보를 제공
    const clothList = data.match(regex)
        // flatMap() 함수를 사용하여 각각의 옷 종류 목록에서 쉼표로 분리된 숫자들을 추출
        .flatMap((str) => str.match(/\d+/g).slice(1))
        .map(Number);
    return [...new Set(clothList)];
}
const result = addArray("1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3");
console.log(result)


// flatMap예시
// let arr1 = [1, 2, 3, 4];
// arr1.map(x => [x * 2]);
// // [[2], [4], [6], [8]]

// arr1.flatMap(x => [x * 2]);
// // [2, 4, 6, 8]

// // 한 레벨만 평탄화됨
// arr1.flatMap(x => [[x * 2]]);
// // [[2], [4], [6], [8]]


// match함수의 예제
// const str = 'Hello, World! This is a test string.';
// const regex = /is/g;

// const result = str.match(regex);

// console.log(result); // ["is", "is"]

