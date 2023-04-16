// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수,
// solution을 완성해 보세요. 배열의 맨 앞에 최대공약수,
// 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3,
// 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
    let answer = []
    let gcd = function(n, m) {
      if (m === 0) {
        return n;
      } else {
        return gcd(m, n % m);
      }
    };
    let lcm = (n * m) / gcd(n, m);
    return answer =[gcd(n, m), lcm];
  }
  
  // 예시
  console.log(solution(12, 18)); // [6, 36]

// console.log(gcd(3, 12)); // 6



// let gcd = function(a, b) {
//     if (b === 0) {
//       return a;
//     } else {
//       return gcd(b, a % b);
//     }
//   };
//   let lcm = (a * b) / gcd(a, b);
//   return [gcd(a, b), lcm];


// function gcd(a, b) {
//     if (b === 0) {
//       return a;
//     } else {
//       return gcd(b, a % b);
//     }
//   }

//   // 예시
//   console.log(gcd(12, 18)); // 6

//   function lcm(a, b) {
//     return (a * b) / gcd(a, b);
//   }

//   // 예시
//   console.log(lcm(12, 18)); // 36
