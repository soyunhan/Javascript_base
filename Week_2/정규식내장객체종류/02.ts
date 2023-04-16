// // 정규식 패턴과 매칭된 문자열 찾기:
// const pattern: RegExp = /\d+/g;
// const string: string = 'hello 123 world 456';
// const result: string[] | null = string.match(pattern);
// console.log(result); // ['123', '456']

// // 문자열의 시작부터 정규식 패턴과 매칭되는지 확인하기:
// const pattern: RegExp = /\d+/;
// const string: string = '123 hello world';
// const matchObj: RegExpMatchArray | null = string.match(pattern);
// if (matchObj) {
//   console.log(matchObj[0]); // '123'
// }

// // 문자열에서 첫 번째로 매칭되는 부분 찾기:
// const pattern: RegExp = /\d+/;
// const string: string = 'hello 123 world 456';
// const searchObj: RegExpMatchArray | null = string.match(pattern);
// if (searchObj) {
//   console.log(searchObj[0]); // '123'
// }

// // 정규식에서 매칭된 문자열 그룹 추출하기:
// const pattern: RegExp = /(\w+) (\d+)/;
// const string: string = 'hello 123 world 456';
// const matchObj: RegExpMatchArray | null = string.match(pattern);
// if (matchObj) {
//   console.log(matchObj[0]); // 'hello 123'
//   console.log(matchObj[1]); // 'hello'
//   console.lo
//   g(matchObj[2]); // '123'
// }
// // 문자열에서 모든 매칭된 결과 찾기:
// const pattern: RegExp = /\d+/g;
// const string: string = 'hello 123 world 456';
// const result: string[] | null = string.match(pattern);
// console.log(result); // ['123', '456']

// // 문자열 내의 패턴 치환하기:
// const pattern: RegExp = /\s+/g;
// const string: string = 'hello  world';
// const result: string = string.replace(pattern, '_');
// console.log(result); // 'hello_world'

// 문자열에서 패턴으로 분리하기:
// const pattern: RegExp = /\s+/;
// const string: string = 'hello  world';
// const result: string[] = string.split(pattern);
// console.log(result); // ['hello', 'world']
