const input = document.querySelector('.calculator-input');
const buttons = document.querySelector('.calculator-button');
const clear= document.querySelector('.calculator');

let inputValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;
updateInput ();
function updateInput (){
    input.value = inputValue;
}

clear.addEventListener('click', function(e){
    const element = e.target;
    

    if(element.classList.contains('clear')){
        // console.log('clear', element.value);
        Clear();
        updateInput();
        return;
     }
});

buttons.addEventListener('click', function(e) {
 const element = e.target;
 if (!element.matches('button')) return;

 if(element.classList.contains('operator')){
    // console.log('operator', element.value);
     chooseOperator(element.value); // Hangi işlemin seçildiğini anlamak için yazıldı.
     updateInput();
    return;
 }

 if(element.classList.contains('decimal')){
    // console.log('decimal', element.value);
    inputDecimal();
    updateInput();
    return;
 }

 
//  console.log('number', element.value);
inputNumber(element.value);
updateInput();

}); 

function chooseOperator(nextOperator){
const value = parseFloat(inputValue);

if (operator && waitingForSecondValue) {
    operator = nextOperator;
    return;
}

if(firstValue ===null){
    firstValue=value;
  }else if(operator){
    const result = calculate(firstValue, value, operator);

    inputValue= String(result);
    firstValue =result;
  }

  waitingForSecondValue = true;
  operator = nextOperator;
  console.log(inputValue, firstValue, operator, waitingForSecondValue);
}

function calculate (firstNum, secondNum, operator){
    if (operator === '+') {
        return firstNum + secondNum; 
    }else if (operator === '-') {
        return firstNum - secondNum ; 
    }else if (operator === '*') {
        return firstNum * secondNum ; 
    }else if (operator === '/') {
        return firstNum / secondNum ; 
    }

    return secondNum;
}

function inputNumber(num){
    if(waitingForSecondValue){
        inputValue=num;
        waitingForSecondValue=false; 
    }
    else{
        inputValue = inputValue === '0'? num: inputValue + num; 
    }
    console.log(inputValue, firstValue, operator, waitingForSecondValue);
}

function inputDecimal(){
    if(!inputValue.includes('.')){
        inputValue+='.';
    }
 
}

function Clear(){

    inputValue ='0';

}