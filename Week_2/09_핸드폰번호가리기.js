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