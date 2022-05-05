//Creating The Function
function multiplicationgame() {

    //Setting Random Number Variables between 0 - 12
    var a = Math.floor(Math.random() * 13)
    var b = Math.floor(Math.random() * 13)

    //Setting Points to 1.
    var points = 1

    //Setting Answer to A*B
    answer = (a * b);

    //Creating a while loop

    while (points < 8) {

        //Prompt that will pop up on screen
        question = prompt("What is " + a + " X " + b + "? ");

        //If question == answer comes back true
        if (question == answer) {
            alert("Well done, Your answer is correct! You are on " + points + " points");
            points += 1;


            //Re-Randomising the next numbers
            var a = Math.floor(Math.random() * 13)
            var b = Math.floor(Math.random() * 13)
            answer = (a * b)

            //Outputs 'congratulations'.
            if (points==8){
                alert("Congratulations! You have beaten the game!")
            } else {
                continue
            }

            

            //If question == answer comes back false.
        } else {
            alert("Incorrect Answer, Try again!")
            break
        }
    }
}
