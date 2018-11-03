var card = $("quiz-screen");
// use object literals to define the questions, answers and correct answers.
var questions = [{
    question: "Who is the greatest Laker of all time?",
    answers: ["Kareem Abdul-Jabar", "Magic Johnson", "Shaq", "Kobe Bryant", "LeBron James"],
    correct: "Kareem Abdul-Jabar"
}, {
    question: "What year did the Dodgers Last win the World Series?",
    answers: [2017, 1997, 1988, 1972, "I wasnt born yet."],
    correct: 1988
}, {
    question: "who is the bet Marvel Superhero without a movie?",
    answers: ["Blue Marvel", "Nova", "Speedball", "Namor", "Gabmit"],
    correct: "Nova"
}, {
    question: "Best Podcast to listen to on a friday morning",
    answers: ["Today, Explained", "Slates Political Gabfest", "The Daily", "The Weeds", "Marketplace", "Any of them"],
    correct: "Any of them"
}, {
    question: "What did the 'S' in Ulysses S. Grant stand for?",
    answers: ["Sam", "Smith", "Samson", "Simpson", "It was a clerical error made at Westpoint, but the nickname U.S. Grant sounded cool and it stuck."],
    correct: "It was a clerical error made at Westpoint, but the nickname U.S. Grant sounded cool and it stuck."
}, {
    question: "Which of the following Theodore Roosevelt Quotes are real?",
    answers: ["Whenever asked if you can do a job, tell them 'Certainly I can!' Then get busy and find out how.", "What a man needs is not courage but nerve control, cool headedness.  This he can get only by practice", "We must all either rust out or wear out.  My choice is to wear out.", "In any moment of decision, the best thing you can do is the right thing.  The worst thing you can do is nothing.", "Teddy Roosevelt said all those things."],
    correct: "Teddy Roosevelt said all those things."
}, {
    question: "Who was Seneca?",
    answers: ["A Roman Philosopher", "The founder of Stoicism", "Socrates, Seneca was his pen name", "A saint, thats why St. Seneca is a band.", "Alexander the Greats teacher"],
    correct: "A Roman Philosopher"
}, { 
    question: "Where was Alexander The Great from?",
    answers: ["Persia", "England", "Rome", "Macedonia", "Athens", "Trenton"],
    correct: "Macedonia"

}, {
    question: "Which of the following is the greatest sitcom of all time?",
    answers: ["Seinfield", "Friends", "It's Always Sunny In Philidelphia", "Community", "Happy Endings"],
    correct: "It's Always Sunny In Philidelphia"
}];
// Declare variables for the timer, there is no value yet
var timer;
// use an object literal to set some paramerters for the game, the user is starting with 0 incorrect/correct answers. 
// I'll give the user 90s to complete the quiz.
// create a function to operate the timer. when the timer counts down to 0 the game ends.
// declare a function to start the timer when the users starts playing the game.
// append the countdown timer to the page
// add a 'finished' button to the game.  this should also be appended.
// create else/if statements to either increment or decrement the the users correct/incorrect score.
// when the game ends, the user should be able to to reset the game and start over again without refreshing the page.
var game = {
    correct: 0, 
    incorrect: 0,
    counter: 90,
    countdown: function () {
        game.counter;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("Don't worry, your score isn't going to affect your life.");
            game.done();
        }
    },
    
    start: function() {
        timer = setInterval(game.countdown, 1000);
    
        $("#subwrapper").prepend("<h2>Shot Clock: <span id= 'counter-number'>240</span> Seconds</h2>");
        $("#start").remove();
        for (let i = 0; i< questions.length; i++) {
          card.append("<h2>" + questions[i].question + "</h2>");
          for (let j = 0; j < questions[i].answers.length; j++) {
              card.append("<input type ='radio' name ='question'" + i + "'value ='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);  
          }
        }
        card.append("<button id ='finished'>Finsihed</button>");
    },
    done: function () {
      $.each($("input[name = 'question-0']:checked"), function(){
          if ($(this).val() === questions[0].correctAnswer) {
              game.correct++;
          }
          else {
              game.incorrect++;
          }
      });
      $.each($("input[name = 'question-1']:checked"), function(){
        if ($(this).val() === questions[1].correctAnswer) {
            game.correct++;
        }
        else {
            game.incorrect++;
        }
    }); 
    $.each($("input[name = 'question-2']:checked"), function(){
        if ($(this).val() === questions[2].correctAnswer) {
            game.correct++;
        }
        else {
            game.incorrect++;
        }
    }); 
    $.each($("input[name = 'question-3']:checked"), function(){
        if ($(this).val() === questions[3].correctAnswer) {
            game.correct++;
        }
        else {
            game.incorrect++;
        }
    });
    $.each($("input[name = 'question-4']:checked"), function(){
        if ($(this).val() === questions[4].correctAnswer) {
            game.correct++;
        }
        else {
            game.incorrect++;
        }
    });
    $.each($("input[name = 'question-5']:checked"), function(){
        if ($(this).val() === questions[5].correctAnswer) {
            game.correct++;
        }
        else {
            game.incorrect++;
        }
    });      $.each($("input[name = 'question-6']:checked"), function(){
        if ($(this).val() === questions[6].correctAnswer) {
            game.correct++;
        }
        else {
            game.incorrect++;
        }
    });      $.each($("input[name = 'question-7']:checked"), function(){
        if ($(this).val() === questions[7].correctAnswer) {
            game.correct++;
        }
        else {
            game.incorrect++;
        }
    });      $.each($("input[name = 'question-8']:checked"), function(){
        if ($(this).val() === questions[8].correctAnswer) {
            game.correct++;
        }
        else {
            game.incorrect++;
        }
    });
    this.result();

    },

    result: function() {
        clearInterval(timer);
        $("sub-wrappper h2").remove();

        card.html("<h1>Finished</h1>");
        card.append("<h2>We agree on " + this.correct + " things...");
        card.append("<h3>You should re-think " this.incorrect + "<h3>");
        card.append("<h4>Wow, I thought those were softballs. You didnt answer " + (questions.length - (this.incorrect + this.correct)) + "you'll do better next time, seriously the questions dont change"
    }

};

$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});