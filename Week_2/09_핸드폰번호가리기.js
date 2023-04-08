function solution(phone_number) {
    var answer = '';
    const phonefirst = phone_number.slice(0, phone_number.length -4 )
    const phoneLast = phone_number.slice(-4);
    console.log(phonefirst, phoneLast)
    for(let i = 0; i < phonefirst.length; i++){
        answer += phonefirst[i].replace(phonefirst[i],'*')
    }
    return answer + phoneLast;
}

console.log(solution('01033334444'))



// let answer = '';
// let len = phone_number.length;
// console.log(len) // 넘버에 길이
// answer = "*".repeat(len - 4) + phone_number.slice(len - 4, len)