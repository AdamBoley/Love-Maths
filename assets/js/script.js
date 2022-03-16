//wait for the DOm to load before running the game
//get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {//listens for the DOM Content Loaded event, immediately executes this function, rather than defining the function elsewhere and invoking it here
//may try to see if I can cut this down and abstract out child functions
    let buttons = document.getElementsByTagName("button"); //generates an array of the button elements, which is 5 array elements long

    for (let button of buttons) { //For OF loop to loop over the above array, similar to let i = 0.... loop, but more modern

        button.addEventListener("click", function() { //again, declares an event listener, and directly calls a function
            if (this.getAttribute("data-type") === "submit") { //checks if the value of the data-type attribute of the button is submit
                alert("You clicked submit"); //alerts the user that they have clicked submit
            }

            else { //triggers if any other button is clicked
                let gameType = this.getAttribute("data-type"); //declares a new variable that has a value of the data-type of the button clicked
                alert(`You clicked${gameType}`)//alerts user
            }
        })

    }
    
}

)


function runGame() {

    let number1 = math.round(math.random() * 50) + 1; //generates a random integer between 1 and 50. The +1 means that the variable can never be 0. Math.round is conventional rounding, so 51 could be generated
    let number2 = math.round(math.random() * 50) + 1; //generates a random integer between 1 and 50. The +1 means that the variable can never be 0

    console.log(number1);
    console.log(number2);

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementCorrectAnswer() {

}

function incrementIncorrectAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayMultiplyQuestion() {

}







