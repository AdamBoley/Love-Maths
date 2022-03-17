//wait for the DOm to load before running the game
//get button elements and add event listeners to them

//future ideas: - 
//see if the large first function can be cut down by splitting into smaller functions
//create some sort of random number generator that randomises the next question

document.addEventListener("DOMContentLoaded", function() {//listens for the DOM Content Loaded event, immediately executes this function, rather than defining the function elsewhere and invoking it here
//may try to see if I can cut this down and abstract out child functions
    let buttons = document.getElementsByTagName("button"); //generates an array of the button elements, which is 5 array elements long

    for (let button of buttons) { //For OF loop to loop over the above array, similar to let i = 0.... loop, but more modern

        button.addEventListener("click", function() { //again, declares an event listener, and directly calls a function
            if (this.getAttribute("data-type") === "submit") { //checks if the value of the data-type attribute of the button is submit
                checkAnswer(); //calls the checkAnswer function
            }

            else { //triggers if any other button is clicked
                let gameType = this.getAttribute("data-type"); //declares a new variable that has a value of the data-type of the button clicked
                runGame(gameType); //calls the runGame function
            }
        })

    }

    runGame("addition");
    
}

)

/**
 * The main gane loop, which is called when the script is first loaded
 * and again after the user's answer has loaded
 * 
 */
function runGame(gameType) {//gameType is the data-type attribute value of the buttons

    let number1 = Math.round(Math.random() * 50) + 1; //generates a random integer between 1 and 50. The +1 means that the variable can never be 0. Math.round is conventional rounding, so 51 could be generated
    let number2 = Math.round(Math.random() * 50) + 1; //generates a random integer between 1 and 50. The +1 means that the variable can never be 0

    if(gameType === "addition") {//Checks the value of gameType, and calls the displayAdditionQuestion function inside the runGame function if the addition button was clicked
        displayAdditionQuestion(number1, number2); //calls function, tells it to accept the two random numbers
    }
    else {
        alert(`unknown game type: ${gameType}`); //This shouldn't happen in the final build, but is included for completeness' sake
        throw `unknown game type: ${gameType}. Aborting!`; //the throw keyword aborts the function and logs the message for debugging purposes
    }
}

/**
 * Checks answer against the first element of the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer-box').value); //gets the value of the user's answer entered into the answer box
    let calculatedAnswer = calculateCorrectAnswer(); //calls the calculateCorrectAnswer function, assigns value as the array returned from that function
    let isCorrect = userAnswer === calculatedAnswer[0]; //calculatedAnswer is an array, but we're indexing to find the first element, which is the result of the calculation
    // note use of the strictly equal comparison, so the isCorrect variable returns a boolean true/false value

    if(isCorrect === true) { //could be shorted to isCorrect, as the IF part of the IF/ELSE statement checks for boolean truth
        alert("You got the right answer!");
        incrementCorrectAnswer(); //calls the incrementCorrectAnswer function, adds 1 to the correct answer count
    }
    else { //triggers if isCorrect returns as false
        alert(`You got the wrong answer. You answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}.`);
        incrementIncorrectAnswer(); //calls the incremenetIncorrectAnswer function, adds 1 to the incorrect answer count
    }

    runGame(calculatedAnswer[1]); //calls the runGame function using the second element of the calculatedAnswer array, the game type

};

/**
 * Gets the operands and the operator - the numbers and the sign - directly from the DOM and returns the correct answer
 * 
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand-1').innerText);//the parseInt method converts a string to an integer. Makes use of JS's type-conversion ability
    let operand2 = parseInt(document.getElementById('operand-2').innerText);
    let operator = document.getElementById('operator').innerText; //no need to parseInt since the operator is a mathematical operator
    //these declarations retrieve the values of the operator and the operands for use within the function

    if(operator === "+") {
        return [operand1 + operand2, "addition"]; //square brackets, returns an array. The first element is the result of the calculation, the second element is the game type we want to run next
    }
    else {
        alert(`Unimplemented operator ${operator}`); //should not happen in the final version
        throw `Unimplemented operator ${operator}, aborting`;
    }
}

/**
 * Gets current score from DOM and increments it by 1, then returns that incremented value
 */
function incrementCorrectAnswer() {

    let oldCorrectAnswer = parseInt(document.getElementById('correct').innerText); //can also use the textContent method, since it and innerText are largely interchangeable
    document.getElementById('correct').innerText = ++oldCorrectAnswer; // can also use oldCorrectAnswer + 1

}

function incrementIncorrectAnswer() {

    let oldIncorrectAnswer = parseInt(document.getElementById('incorrect').innerText); //can also use the textContent method, since it and innerText are largely interchangeable
    document.getElementById('incorrect').innerText = ++oldIncorrectAnswer; // can also use oldCorrectAnswer + 1

}

function displayAdditionQuestion(operand1, operand2) { //tells the function that it should accept two parameters called operand1 and operand2. 
    //When called via the runGame function, operand1 and operand2 are replaced(?) by the two randomly generated numbers 

    document.getElementById('operand-1').textContent = operand1; //I think this is like a variable, but in reverse, it is taking operand1 and placing it into the HTML document for the user to see what the question is
    document.getElementById('operand-2').textContent = operand2; 
    document.getElementById('operator').textContent = "+"; //the same happens here - when the function is called, hard-sets the operator span in the HTML document to +

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayMultiplyQuestion() {

}







