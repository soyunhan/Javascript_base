var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            // 1. 객체 this 바인딩 : 프란시스 은가누
            //호출의 주체가 명확하다
            return this.fullname;
        }
    },

    getName: function () {
        // 2. 객체 this 바인딩 : 존 존스
        //호출의 주체가 fighter
        return this.fullname;
    },

    getFirstName: () => {
        // 3. 함수 this 바인딩 : 시릴
        //화살표함수 선언(함수 this 바인딩 안함) 그래서 제일 상단에 fullname 바인딩 
        return this.fullname.split(' ')[0];
    },

    getLastName: (function () {
        // 3. 함수 this 바인딩 : 시릴
        //클로저 개념(호출부가 없다) 스스로 선언을 하고 호출까지 한다. 결론:호출의 주체가 없다 즉시실행 함수          
        return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);