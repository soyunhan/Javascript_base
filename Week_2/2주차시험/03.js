// 지뢰 탐지가 필요해
// 😃 설명) 
// windows에서 지원하는 지뢰 찾기 게임을 한번쯤은 해 보았을 것이다. 
// 특히 르탄이는 지뢰찾기의 매니아로 알려져 있다. 지뢰 찾기 지도은 N*N의 정사각형 모양으로
// 각 칸에는 숫자가 들어가 있거나 지뢰가 들어가 있다. 
// 빈 칸에는 숫자 0이 들어있다고 생각하자.

// 지도의 어떤 칸에 적혀 있는 숫자는, 그 칸과 인접해 있는 여덟 개의 칸 중에서 지뢰가 들어 있는
// 칸이 몇 개인지를 나타내 준다. 
// 물론 인접한 칸이 map 내부에 있는 경우에 대해서만 생각하면 된다.
// 예제를 보면 더 잘 이해할 수 있을 것이다.

// 이번 문제는 조금 업그레이드 된 지뢰 찾기로, 
// 한 칸에 한 개의 지뢰가 있는 것이 아니고,한 칸에 1 이상 9 이하의 지뢰가 묻혀 있는 게임이다.
// 따라서 지도의 어떤 칸에 적혀 있는 숫자는, 그 칸과 인접해 있는 여덟 개의 칸들에 들어 있는 지뢰의 총 개수가 된다.

// 이미 windows 지뢰찾기 같은 것을 마스터한 르탄이는, 지도에서 지뢰에 대한 정보만이 주어졌을 때,
// 르탄이는 지도을 완성하고 싶다고 한다. N과 지뢰의 위치가 주어졌을 때,
// 르탄이를 도와서 지뢰 찾기 map을 완성하는 프로그램을 작성하시오.

// (단, 1 ≤ N ≤ 1,000 이며, 배열의 각 요소에는 지뢰 찾기 map에 대한 정보가 주어지는데 '.' 또는
// 숫자로 이루어진 문자열이 들어온다. '.'는 지뢰가 없는 것이고 숫자는 지뢰가 있는 경우로 그 칸의 지뢰의 개수이다.
// 한 줄은 N개의 문자로 이루어져 있다.

function minesweeper(n, mines) {
    // create an empty map
    const map = new Array(n).fill().map(() => new Array(n).fill('.'));
  
    // mark the mine locations
    for (let [x, y] of mines) {
      map[x][y] = '*';
    }
  
    // count the number of adjacent mines
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (map[i][j] === '.') {
          let count = 0;
          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              if (dx !== 0 || dy !== 0) {
                const x = i + dx;
                const y = j + dy;
                if (x >= 0 && x < n && y >= 0 && y < n && map[x][y] === '*') {
                  count++;
                }
              }
            }
          }
          if (count > 0) {
            map[i][j] = String(count);
          }
        }
      }
    }
  
    // return the completed map
    return map.map(row => row.join(''));
  }
  
  // example usage
  const n = 3;
  const mines = [[0, 0], [1, 2], [2, 1]];
  console.log(minesweeper(n, mines)); // prints ["*21", "3*1", "2*1"]
  
