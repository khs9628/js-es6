
/*
    예제 2. Lotto 번호 만들기.
    1. 유일한 값을 추출하는 과정에서 Set을 사용합니다.
    2. getRamdomNumber함수에 변수를 전달하는 과정에서 destructuring을 사용합니다.
*/

const SETTING = {
    name : "LUCKY LOTTO" ,
    count : 6,
    maxNumber : 45
}

const{count,maxNumber} = SETTING;
const lotto = new Set();


function getRamdomNumber(maxNumber){
    //랜덤한 유일한 숫자 값 추출
    while(lotto.size<count){
        const randNum = Math.floor(Math.random() * (maxNumber-1))+1;
        if(!lotto.has(randNum)){
            lotto.add(randNum);
        }
    }

}

getRamdomNumber(maxNumber);


lotto.forEach(n => {console.log(n)});