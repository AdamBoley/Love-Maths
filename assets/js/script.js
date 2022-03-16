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

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementCorrectAnswer() {

}

function incrementIncorrectAnswer() {

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







