$(document).ready(function () {

    // When intially loading page, display id startScreen
    //Hide all other elements

    function startScreen() {

        document.getElementById("startScreen").style.display = "block";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("answerCorrect").style.display = "none";
        document.getElementById("answerIncorrect").style.display = "none";
        document.getElementById("finishScreen").style.display = "none";

    }

    startScreen();

    //Global Variables

    let totalCorrect = 0;
    let totalIncorrect = 0;

    // If button with id startGame pressed, start presenting questions


    $("#startGame").click(function () {

        document.getElementById("startScreen").style.display = "none";
        document.getElementById("question1").style.display = "block";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("answerCorrect").style.display = "none";
        document.getElementById("answerIncorrect").style.display = "none";
        document.getElementById("finishScreen").style.display = "none";

        setTimeout(outOfTime, 20000);
    });



    //When button clicked or timeout determine if class is correct or incorrect
    //20 seconds for each question
    //Display if answer is correct or incorrect after 1/2 a second, display for 2 seconds
    //adjust points

    $(".correct").click(function () {
        totalCorrect++;
        console.log(totalCorrect);
        setTimeout(displayCorrect, 500);


    });



    $(".incorrect").click(function () {

        totalIncorrect++;
        console.log("Correct" + totalIncorrect);
        setTimeout(displayIncorrect, 500);


    });



    function outOfTime() {

        totalIncorrect++;
        console.log("Incorrect" + totalIncorrect);
        setTimeout(displayIncorrect, 500);


    }

    //Determine which question to present next
    // If all questions have been answered, display id finishScreen
    //Write points to screen

    function displayNextQuestion() {

        document.getElementById("answerCorrect").style.display = "none";
        document.getElementById("answerIncorrect").style.display = "none";

        if (totalCorrect + totalIncorrect === 1) {
            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 2) {
            document.getElementById("question2").style.display = "none";
            document.getElementById("question3").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 3) {
            document.getElementById("question3").style.display = "none";
            document.getElementById("question4").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 4) {
            document.getElementById("question4").style.display = "none";
            document.getElementById("question5").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 5) {
            document.getElementById("question5").style.display = "none";
            document.getElementById("question6").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 6) {
            document.getElementById("question6").style.display = "none";
            document.getElementById("question7").style.display = "block";
        } else if (totalCorrect + totalIncorrect === 7) {
            document.getElementById("question7").style.display = "none";
            document.getElementById("finishScreen").style.display = "block"

            $("#totalCorrect").html("Total Correct: " + totalCorrect);
            $("#totalWrong").html("Total Incorrect: " + totalIncorrect);
        }
        setTimeout(outOfTime, 20000);
    }



    // Functions for displaying correct/incorrect answer

    function displayCorrect() {

        document.getElementById("startScreen").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("answerCorrect").style.display = "block";
        document.getElementById("answerIncorrect").style.display = "none";
        document.getElementById("finishScreen").style.display = "none";
        setTimeout(displayNextQuestion, 2000);


    }

    function displayIncorrect() {

        document.getElementById("startScreen").style.display = "none";
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("answerCorrect").style.display = "none";
        document.getElementById("answerIncorrect").style.display = "block";
        document.getElementById("finishScreen").style.display = "none";
        setTimeout(displayNextQuestion, 2000);

    }


    //If Restart Pressed, Resart Game

    $("#restartGame").click(function () {
        totalCorrect = 0;
        totalIncorrect = 0;
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("question1").style.display = "block";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("answerCorrect").style.display = "none";
        document.getElementById("answerIncorrect").style.display = "none";
        document.getElementById("finishScreen").style.display = "none";
    });


});