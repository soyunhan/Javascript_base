function calculator() {
    let result = 0;
  
    function add(num) {
      result += num;
      return this;
    }
  
    function subtract(num) {
      result -= num;
      return this;
    }
  
    function multiply(num) {
      result *= num;
      return this;
    }
  
    function divide(num) {
      result /= num;
      return this;
    }
  
    function clear() {
      result = 0;
      return this;
    }
  
    function displayResult() {
      console.log(`Result: ${result}`);
    }
  
    return {
      add,
      subtract,
      multiply,
      divide,
      clear,
      displayResult
    };
  }
  
  const calc = calculator();
  // 출력: Result: 10
  calc.add(5).subtract(2).multiply(3).divide(4).clear().add(10).displayResult(); 
  