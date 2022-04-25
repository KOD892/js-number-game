//game variables
let minNum = 1,
    maxNum = 10,
    correctNum = getCorrectNum(maxNum, minNum),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    UImin = document.querySelector('.min-num'),
    UImax = document.querySelector('.max-num'),
    guessVal = document.querySelector('#guess-input'),
    btn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');

//assign min and max
UImax.textContent = maxNum;
UImin.textContent = minNum;
//event listners
//play again
game.addEventListener('mousedown', function(e) {
        if (e.target.classList.contains('play-again')) {
            guessVal.value = '';
            window.location.reload();
        }
    })
    //game
btn.addEventListener('click', function() {
    let guess = parseInt(guessVal.value);
    //console.log(guess)
    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        setMsg(`Please Enter a number btw ${minNum} and ${maxNum}`, 'red');
    } else {

        //validate guess
        if (guess == correctNum) {
            //win
            gameOver(true, `${correctNum} 1s C0RR3C7, Y0U W1N `, 'green');
        } else {
            guessesLeft -= 1;
            if (guessesLeft == 0) {
                gameOver(false, `Game 0ver, the correct number was ${correctNum}`)
            } else {
                //try again
                //clear input field
                guessVal.value = '';
                setMsg(`${guess} is incorrect... you have ${guessesLeft} guesses left`, 'blue')
            }
        }
    };


});
//functions
function setMsg(msg, color) {
    //set message
    message.style.color = color;
    message.textContent = msg;
};

function gameOver(won, msg) {
    //gameover
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input field
    guessVal.disabled = true;
    guessVal.style.borderColor = color;
    // setMsg
    setMsg(msg, color);
    //play again
    btn.value = 'Play Again';
    btn.className += 'play-again';
};

function getCorrectNum(max, min) {
    //generate random number
    num = Math.floor(Math.random() * (max - min + 1) + 1)
    return num;
}