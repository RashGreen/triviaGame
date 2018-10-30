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
// Here I declare variables for the timer, there is no value
var timer;
// use an object literal to set some paramerters for the game, the user is starting with 0 incorrect/correct answers. 
// I'll give the user 3 minutes to complete the quiz
var game = {
    correct: 0, 
    incorrect: 0,
    counter: 240,
// create a function to operate the timer. when the timer counts down to 0 the game ends.
   
// declare a function to start the timer when the users starts playing the game.
// append the countdown timer to the page
// add a 'finished' button to the game.  this should also be appended.
// create else/if statements to either increment or decrement the the users correct/incorrect score.
// when the game ends, the user should be able to to reset the game and start over again without refreshing the page.

}