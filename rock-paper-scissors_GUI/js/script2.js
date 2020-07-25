var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';
var result = '컴퓨터' + comInput;

function onButtonClick(userInput){
    var comInput;
    var rnd = Math.random();

    if(rnd < 0.33){
        comInput = SCISSORS;
    } else if(rnd < 0.66){
        comInput = ROCK;
    } else{
        comInput = PAPER;
    }

    if(userInput === SCISSORS){
        if(comInput === SCISSORS){
            result += '- 비겼습니다.';
        } else if(comInput === ROCK){
            result += '- 졌습니다.';
        } else{
            result += '- 이겼습니다.';
        }
    } else if(userInput === ROCK){
        if(comInput === ROCK){
            result += '- 비겼습니다.';
        } else if(comInput === PAPER){
            result += '- 졌습니다.';
        } else{
           result += '- 이겼습니다.';
        }
    } else{
        if(comInput === PAPER){
            result += '- 비겼습니다.';
        } else if(comInput === SCISSORS){
            result += '- 졌습니다.';
        } else{
            result += '- 이겼습니다.';
        }
    }
    alert(result);
}
