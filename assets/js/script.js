var btnClicked = $('#start-btn');
var mainEl = $('#main');
var timerEl = document.getElementById('timer');
var isAnswer = $('#footer');
var highscoreBtn = $('#leaderboard');
var header = $('.header');
var timeStop = true;
var board = [];

var storedScores = JSON.parse(localStorage.getItem("board"));
//var storedScores = localStorage.getItem('board');

if (storedScores !== null) {
    board = storedScores; 
}

// resets quiz parameters and runs
function run() {
    let questionNum = 0;
    let timeLeft = 75;
    let score = 0;
    let addChoices = true;
    timeStop = false;
    countdown()
    startQuiz()
    
function startQuiz() {
    
    mainEl.children('.body').text('');
    mainEl.children('button').remove();
    
    // quiz questions
    if (questionNum === 0 && addChoices === true) {
        mainEl.children().eq(0).text('What is a method?');
        mainEl.children('ul').append("<li><button value=1 class='questionBtn'>The use of a variable in a function.</button></li>");
        mainEl.children('ul').append("<li><button value=1 class='questionBtn'>When an element is appended.</button></li>");
        mainEl.children('ul').append("<li><button value=1 class='questionBtn'>When a function is in an object.</button></li>");
        mainEl.children('ul').append("<li><button value=1 class='questionBtn'>The use of jquery syntax.</button></li>");
        mainEl.children('ul').children('li').children().eq(2).val('3')
        addChoices = false; 
    }else if (questionNum === 1 && addChoices === true) {
        mainEl.children().eq(0).text('What does NaN stand for?');
        mainEl.children('ul').children('li').children().eq(0).text("No algorithm Noticed");
        mainEl.children('ul').children('li').children().eq(1).text("Not a Number");
        mainEl.children('ul').children('li').children().eq(2).text("New append Next-to");
        mainEl.children('ul').children('li').children().eq(3).text("Number already Noted");
        mainEl.children('ul').children('li').children().eq(2).val('1')
        mainEl.children('ul').children('li').children().eq(1).val('3')
        addChoices = false;
    }else if (questionNum === 2 && addChoices === true) {
        mainEl.children().eq(0).text('Which of the following is a boolean operator?');
        mainEl.children('ul').children('li').children().eq(0).text("**");
        mainEl.children('ul').children('li').children().eq(1).text("@@");
        mainEl.children('ul').children('li').children().eq(2).text("%%");
        mainEl.children('ul').children('li').children().eq(3).text("&&");
        mainEl.children('ul').children('li').children().eq(1).val('1')
        mainEl.children('ul').children('li').children().eq(3).val('3')
        addChoices = false;
    }else if (questionNum === 3 && addChoices === true) {
        mainEl.children().eq(0).text('What is console.log() used for?');
        mainEl.children('ul').children('li').children().eq(0).text("Running a function.");
        mainEl.children('ul').children('li').children().eq(1).text("Generating outlines.");
        mainEl.children('ul').children('li').children().eq(2).text("Logging a variable in the developer console.");
        mainEl.children('ul').children('li').children().eq(3).text("Setting variable values.");
        mainEl.children('ul').children('li').children().eq(3).val('1')
        mainEl.children('ul').children('li').children().eq(2).val('3')
        addChoices = false;
    }else if (questionNum === 4 && addChoices === true) {
        mainEl.children().eq(0).text('What is the symbol to open an array?');
        mainEl.children('ul').children('li').children().eq(0).text("<");
        mainEl.children('ul').children('li').children().eq(1).text("{");
        mainEl.children('ul').children('li').children().eq(2).text("[");
        mainEl.children('ul').children('li').children().eq(3).text("|");
        addChoices = false;
    }else if (questionNum === 5 && addChoices === true) {
        mainEl.children().eq(0).text('What is the casing type used mostly throughout Javascript?');
        mainEl.children('ul').children('li').children().eq(0).text("Giraffe-case");
        mainEl.children('ul').children('li').children().eq(1).text("Turtle-case");
        mainEl.children('ul').children('li').children().eq(2).text("Whale-case");
        mainEl.children('ul').children('li').children().eq(3).text("Camel-case");
        mainEl.children('ul').children('li').children().eq(2).val('1')
        mainEl.children('ul').children('li').children().eq(3).val('3')
        addChoices = false;
    }else if (questionNum === 7 && addChoices === true) {
        mainEl.children().eq(0).text('Which of the following can only hold true or false values?');
        mainEl.children('ul').children('li').children().eq(0).text("While Loop");
        mainEl.children('ul').children('li').children().eq(1).text("Boolean");
        mainEl.children('ul').children('li').children().eq(2).text("Switch");
        mainEl.children('ul').children('li').children().eq(3).text("Else");
        mainEl.children('ul').children('li').children().eq(3).val('1')
        mainEl.children('ul').children('li').children().eq(1).val('3')
        addChoices = false;
    }else if (questionNum === 6 && addChoices === true) {
        mainEl.children().eq(0).text('Which of the following is a string?');
        mainEl.children('ul').children('li').children().eq(0).text("'Thirty'");
        mainEl.children('ul').children('li').children().eq(1).text("'30'");
        mainEl.children('ul').children('li').children().eq(2).text("'mainEl.addEventListener'");
        mainEl.children('ul').children('li').children().eq(3).text("All of the above");
        mainEl.children('ul').children('li').children().eq(1).val('1')
        mainEl.children('ul').children('li').children().eq(3).val('3')
        addChoices = false;
    }else if (questionNum === 8 && addChoices === true) {
        mainEl.children().eq(0).text('Which scope type contains the variables declared outside of all functions?');
        mainEl.children('ul').children('li').children().eq(0).text("Function");
        mainEl.children('ul').children('li').children().eq(1).text("Block");
        mainEl.children('ul').children('li').children().eq(2).text("Global Scope");
        mainEl.children('ul').children('li').children().eq(3).text("Telescope");
        mainEl.children('ul').children('li').children().eq(3).val('1')
        mainEl.children('ul').children('li').children().eq(2).val('3')
        addChoices = false;
    }else if (questionNum === 9 && addChoices === true) {
        mainEl.children().eq(0).text('How do you pull a class from your html using jquery?');
        mainEl.children('ul').children('li').children().eq(0).text("$('.classname')");
        mainEl.children('ul').children('li').children().eq(1).text("$('#classname')");
        mainEl.children('ul').children('li').children().eq(2).text("$('classname')");
        mainEl.children('ul').children('li').children().eq(3).text("$('<classname>')");
        mainEl.children('ul').children('li').children().eq(2).val('1')
        mainEl.children('ul').children('li').children().eq(0).val('3')
        addChoices = false;
    }
    
}
    let questionBtn = $('.questionBtn');
    questionBtn.on('click', questionNext);

// progresses through the quiz
function questionNext() { 
    var buttonValue = $(this).val();
    questionNum++
    if (buttonValue == 3) {
        isAnswer.text('Right!');
        isAnswer.attr('style', 'color:green;');
        score += 10;
        addChoices = true; 
        if (questionNum === 10) {
            displayScore()
        }else
        { startQuiz() }
    } else {
        timeLeft -= 5;
        isAnswer.text('Wrong!');
        isAnswer.attr('style', 'color:red;');
        addChoices = true;
        if (questionNum === 10) {
            displayScore()
        }else 
        { startQuiz() }
    }
}//

// timer function
function countdown() {
var timeInterval = setInterval(function () {

    if (timeStop === false){
    if (questionNum === 10) {
        clearInterval(timeInterval);
    } else if (timeLeft > 0) {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--
    } else {
        clearInterval(timeInterval);
        displayScore();
    }
} else if (timeStop === true) {clearInterval(timeInterval);}
  }, 1000);
}//

// to determine which score results screen is shown.
function displayScore() {
    if (timeLeft <= 0 && questionNum < 10) {
        mainEl.children().text('');
        timerEl.textContent = "Times Up!";
        mainEl.children('button').remove();
        isAnswer.text('');
        mainEl.children().eq(0).text('Sorry! You ran out of time. Your score is ' + score + '/100');
        initialInput();
    } else {
        mainEl.children().text('');
        mainEl.children('button').remove();
        isAnswer.text('');
        mainEl.children().eq(0).text('You finished the quiz! Your score is ' + score + '/100');
        initialInput();
    }//

// submition capability for initials and score
let submitBtn = $('#submit');
function initialInput() {
    mainEl.children().eq(0).append('<p class=score-submit>Initial your score here:</p>');
    mainEl.children().eq(0).children('p').append($("<input type='text' maxlength='3' id='initial' placeholder='AAA'/>"));
    mainEl.children().eq(1).append($("<button id='submit'>Submit</button>"));
    }

submitBtn.on('click', submit);

function submit() {
    let initial = $('#initial').val();
    localStorage.setItem("initial", initial);
    localStorage.setItem("score", score);
    board.push(initial + ' - ' + score);
    localStorage.setItem("board", JSON.stringify(board));
    leaderBoard();
    }
  }
}//

// resets the html to a default setting
function resetQuiz() {
    header.children().text('')
    mainEl.children().remove();
    isAnswer.text('');

    header.children().eq(0).text('View high scores');
    header.children().eq(1).text('Time: 75');

    mainEl.append('<h1 class="title">JS Coding Quiz!</h1>');
    mainEl.append('<p class="body">Answer the following coding questions in the allotted time to test your knowledge and review your score on the leaderboard!</p>');
    mainEl.append('<p class="board"></p>');
    mainEl.append('<button id="start-btn" class=start type="button">Start Quiz</button>');
    mainEl.append('<ul></ul>');
    let btnClicked = $('#start-btn');
    btnClicked.on('click', run);
}//

// sets leaderboard to be responsive and additive 
function leaderBoard() {
    mainEl.children().text('');
    if (board.length === 0) {
        mainEl.children('.body').text('No scores yet!');
        } else {
        mainEl.children('.body').text('');
        var storedScores = JSON.parse(localStorage.board);
        $.each(storedScores, function(index, value){
        $(mainEl.children().eq(1)).append(value + '<br>');
    });
        }
    isAnswer.text('');
    timeStop = true;
    header.children().text('');
    mainEl.children().eq(0).text('Leaderboard');
    mainEl.children('button').remove();
    mainEl.children().children('button').remove();
    mainEl.children().eq(0).append("<button class=back>Back</button>");
    mainEl.children().eq(0).append("<button class=clear>Clear Leaderboard</button>");
    mainEl.children().eq(1).attr('style', 'color:azure; background-color:lightslategray; padding:10px; font-size:25px; font-weight:bold; width:17%; line-height:50pt; margin:auto;');
    var x = window.matchMedia("(max-width: 700px)");
    if (x.matches) {
        mainEl.children().eq(1).attr('style', 'color:azure; background-color:lightslategray; padding:10px; font-size:25px; font-weight:bold; width:45%; line-height:50pt; margin:auto;');
    }
    let clearBtn = $('.clear');
    let backBtn = $('.back');

    backBtn.on('click', function() {
        resetQuiz()
    });//

    // clears leaderboard 
    clearBtn.on('click', function() {
        if (board.length > 0) {
        mainEl.children().eq(1).text('No scores yet!');
        localStorage.clear();
        board = [];
        }
    });//
    }
//

highscoreBtn.on('click', leaderBoard);
btnClicked.on('click', run);