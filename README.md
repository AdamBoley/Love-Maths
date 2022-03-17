to run server - python3 -m http.server

JS logic flow:

When page loads, runs the addition game by default

Can select another game type by clicking a button

runGame function then generates two random numbers between 1 and 25 called number1 and number2

Then checks the gameType - addition, subtract, multiply and divide

Depending on the gameType - invokes 1 of 4 functions to display the question, and passes the two random numbers as operand1 and operand2

These display functions set the numbers displayed in the HTML page variously:
in the case of the addition and multiplication games, the functions set the HTML content unchanged - operand1 and operand2 === number1 and number2
In the case of the subtract game, a ternary operator sets operand 1 as greater than operand 2, so that the result is always positive
In the case of the division game, the first number is the product of the multiplication of operand1 and operand2, the two random numbers, and the second number is === to number2
This ensures that the answer to the division question is always a whole number. 
(An alternative is to supply operand1 and operand2 unchanged, but to use Math.round on the checkAnswer function)

The question is hence displayed to the user for them to answer, and prompts an input

Once they enter an answer and either press the Submit button or hit their Enter key, the checkAnswer function is invoked

the checkAnswer function invokes the calculateCorrectAnswer function, and assigns the returned value to a variable called calculatedAnswer

The calculateCorrectAnswer function reads the HTML document and retrieves the values of the operands set by the displayQuestion functions
the function then calculates the correct answer of the equation

Once the correct answer has been calculated by the calculateCorrectAnswer function, the checkAnswer function resumes

The checkAnswer function checks whether the users answer is equal to the output of the calculateCorrectAnswer

If the users answer matches the calculated answer, an alert activates, and the incrementCorrectAnswer function is invoked

If the users answer does not match the calculated answer, an alert activates displaying the users answer and the correct answer, and the incrementIncorrectAnswer function is invoked

The increment functions work similarly and retrieve the current numbers of the correct and incorrect answers, increment them by 1 and then update the HTML document

The checkAnswer function then resumes and resets the game by invoking the runGame function again, using the same game type as before - i.e an addition game is always followed by an addition game, etc





