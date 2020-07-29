var computer = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
};
var user = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
};
var game = {
    isComputerTurn: true,
    shotsLeft: 15
}

function onComputerShoot(){
    if (game.shotsLeft === 0){
        return;
    }
    if(!game.isComputerTurn){
        return;
    }
    updateAI();

    var shootType = Math.random() < 0.5 ? 2 : 3;

    if(Math.random() < computer['percent' + shootType]){
        showText('컴퓨터가 ' +shootType+ '점슛을 성공시켰습니다.');
        updateComputerScore(shootType);
    } else{
        showText('컴퓨터가 ' +shootType+ '점슛을 실패했습니다.');
    }

    game.isComputerTurn = false;

    disableComputerButtons(true);
    disableUserButtons(false);

    game.shotsLeft--;

    var shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = game.shotsLeft;

    if(game.shotsLeft === 0){
        if(use.score > computer.score) textElem.innerHTML = '승리했습니다!';
        else if(user.score < computer.score) textElem.innerHTML = '아쉽게도 졌습니다..';
        else textElem.innerHTML = '비겼습니다.';

        for(var i=0;i<computerButtons.length;i++){
        computerButtons[i].disabled = true;
        }
        for(var i=0;i<userButtons.length;i++){
            userButtons[i].disabled = true;
        }
    }
}

function onUserShoot(shootType){
    if (game.shotsLeft === 0){
        return;
    }
    if(game.isComputerTurn){
        return;
    }
    var textElem = document.getElementById('text');
    var userScoreElem = document.getElementById('user-score');

    if(Math.random() < user['percent' + shootType]){
        showText(shootType+ '점슛이 성공했습니다.');
        updateUserScore(shootType);
    } else{
        showText(shootType+ '점슛이 실패했습니다.');
    }
    game.isComputerTurn = true;

    disableComputerButtons(false);
    disableUserButtons(true);
}

function showText(s){
    var textElem = document.getElementById('text');
    textElem.innerHTML = s;
}

function updateComputerScore(score){
    computer.score += score;

    var comScoreElem = document.getElementById('computer-score');
    comScoreElem.innerHTML = computer.score;
}

function updateUserScore(score){
    user.score += score;

    var userScoreElem = document.getElementById('user-score');
    userScoreElem.innerHTML = user.score;
}

function disableComputerButtons(flag){
    var computerButtons = document.getElementsByClassName('btn-computer');

    for(var i=0;i<computerButtons.length;i++){
        computerButtons[i].disabled = flag;
    }
}

function disableUserButtons(flag){
    var userButtons = document.getElementsByClassName('btn-user');

    for(var i=0;i<userButtons.length;i++){
        userButtons[i].disabled = flag;
    }
}

function updateAI(){
    var diff = user.score - computer.score;

    if(diff>=10){
        computer.percent2 = 0.7;
        computer.percent3 = 0.43;
    } else if(diff>=6){
        computer.percent2 = 0.6;
        computer.percent3 = 0.38;
    } else if(diff<=-10){
        computer.percent2 = 0.3;
        computer.percent3 = 0.23;
    }else if(diff<=-6){
        computer.percent2 = 0.4;
        computer.percent3 = 0.28;
    }
}
