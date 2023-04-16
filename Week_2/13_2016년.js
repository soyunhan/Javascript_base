function solution(a, b) {
    var answer = '';
    //Date() 생성자 사용
    const date = new Date();
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    // 날짜 설정
    date.setFullYear(2016);
    //0~11
    date.setMonth(a - 1);
    date.setDate(b);
    console.log(date)
    answer = week[date.getDay()];
    return answer 
}


console.log(solution(5, 24));