var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';
var userInput = prompt("가위, 바위, 보!");

if(userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER){
    alert("가위, 바위, 보 중 하나를 입력해야 합니다.");
} else{
    var comInput;
    var rnd = Math.random();

    if(rnd < 0.33){
        comInput = SCISSORS;
    } else if(rnd < 0.66){
        comInput = ROCK;
    } else{
        comInput = PAPER;
    }
    switch(userInput){
        case SCISSORS :
            switch(comInput){
                case SCISSORS : alert('컴퓨터:'+comInput+' - 컴퓨터와 비겼습니다.');
                break;
                case ROCK : alert('컴퓨터:'+comInput+' - 컴퓨터에게 졌습니다.');
                break;
                default : alert('컴퓨터:'+comInput+' - 컴퓨터를 이겼습니다..');
                break;
            }
        case ROCK :
            switch(comInput){
                case ROCK : alert('컴퓨터:'+comInput+' - 컴퓨터와 비겼습니다.');
                break;
                case PAPER : alert('컴퓨터:'+comInput+' - 컴퓨터에게 졌습니다.');
                break;
                default : alert('컴퓨터:'+comInput+' - 컴퓨터를 이겼습니다..');
                break;
            }
        case PAPER :
            switch(comInput){
                case PAPER: alert('컴퓨터:'+comInput+' - 컴퓨터와 비겼습니다.');
                break;
                case SCISSORS : alert('컴퓨터:'+comInput+' - 컴퓨터에게 졌습니다.');
                break;
                default : alert('컴퓨터:'+comInput+' - 컴퓨터를 이겼습니다..');
                break;
            }
    }

}