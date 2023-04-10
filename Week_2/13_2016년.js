function solution(a, b) {
    var answer = '';
    const date = new Date();
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    // 날짜 설정
    date.setFullYear(2016);
    date.setMonth(a - 1);
    date.setDate(b);
    answer = week[date.getDay()];
    return answer 
}


console.log(solution(5, 24));