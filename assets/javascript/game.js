window.onload = function () {
    // Variables 
    //====================================================================================================
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // List of cars for the hangman game
    var carArray = [
        "Lamborghini",
        "Bugatti",
        "Tesla",
        "Porsche",
        "Ferrari",
        "Honda",
        "Aston Martin",
        "Toyota"
    ]

    // Sequence to randomly select each car
    var randomCar = carArray[Math.floor(Math.random() * carArray.length)];

    // get rid of this later
    var lines = "_";

    var wrongAnswer = []
    // Starting the game off with a "win" score of 0
    var wins = 0;

    // Variable to hold the index of the current car
    var carIndex = 0;

    // List of photos for each car
    var carPhotos = {
        "Lamborghini": "<img src='https://via.placeholder.com/400x300' alt = 'car1'>",
        "Bugatti": "<img src='https://via.placeholder.com/400x300' alt = 'car2'>",
        "Tesla": "<img src='https://via.placeholder.com/400x300' alt = 'car3'>",
        "Porsche": "<img src='https://via.placeholder.com/400x300' alt = 'car4'>",
        "Ferrari": "<img src='https://via.placeholder.com/400x300' alt = 'car'>",
        "Honda": "<img src='https://via.placeholder.com/400x300' alt = 'car'>",
        "Aston Martin": "<img src='https://via.placeholder.com/400x300' alt = 'car'>",
        "Toyota": "<img src='https://via.placeholder.com/400x300' alt = 'car'>",
    };
    document.getElementById("carPhoto").innerHTML = carPhotos[randomCar];
    console.log(randomCar)
    for (let i = 0; i < randomCar.length - 1; i++) {
        lines = lines += " _"
    }
    console.log(lines)
    document.getElementById("spaces").innerHTML = lines;
    // When the user presses a key, it will fun the following function...
    document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log(userGuess)
        if (carIndex === carArray.length) {
            return
        }

    }

    // a picture of something appears

    // WHERE IS THE PICTURE COMING FROM?
    // the picture is a file on my computer

    // WHEN DOES IT APPEAR?
    // the picture appears when the page is loaded
    // HOW AM I MAKING THE PICTURE APPEAR?

    // insert code here...

    // an array with all of the possible words to guess
    var carArray = [
        "Lamborghini",
        "Bugatti",
        "Tesla",
        "Porsche",
        "Ferrari",
        "Honda",
        "Aston Martin",
        "Toyota"
    ]
    // choosing a word from the array of possibilities
    var randomCar = carArray[Math.floor(Math.random() * carArray.length)];

    // setting a variable to keep track of all of our wins
    var winCount = 0;
    // setting a variable to keep track of all of our chances
    var chances = 10;
    // setting an array to keep track of all of the letters that have been guessed
    var lettersGuessed = [];
    // setting an array to hold all of the letters of the randon word chosen
    var wordLetters = [];

    // looping over the word chosen from the array
    for (var i = 0; i < randomCar.length; i++) {
        // for every iteration of the loop, put the letter at the current index into the array
        wordLetters.push(randomCar[i])
    }

    // create an array to hold the blanks for the word
        // CODE HERE
    // loop over the word again
        // CODE HERE
    // for every iteration of the loop, put a blank into the array of blanks
    // then put those blanks into a div in the HTML
        // CODE HERE

    // STARTING THE GAME

    // whenever a user presses a key...
        // CODE HERE

    // create a new variable to hold the value of that key pressed
    // set that variable value to the key pressed
        // CODE HERE
    
    // compare the key pressed to the words in the wordLetters array
    // loop over the wordLetters array
    // for every run in the loop, check if the user's key press matches the current index in the variable
        // HINT: the user key press is stored in a variable
        // HINT: how do I check what the value of an index in an array is?
    // CODE HERE

        // if the key press matches...
            // then change the value of the corresponding index in the array of blanks
                // HINT: how do I check if the index of the blanks array matches the index of this letter in the word array?
            // re-write the array of blanks into the div in the HTML
                // HINT: it is going in the same div
                // HINT: it should be writing blanks everywhere except where we changed the values to letters
        // CODE HERE

        // else, if the key press does not match...
            // then take the value of the key we pressed
                // HINT: a variable we set
            // push that into the array of wrong guesses
            // write that array into the corresponding div in the HTML
            // update the value of the chances variable, one less chance!


    // DID WE WIN?
        // how can I check to see if the user has guessed all of the words?
        // HINT: comparing the values of two arrays
            // HINT: the word v. the blanks
        // if they match...
        // the user won
            // do something


    




    // I have a number of chances to guess in order to figure it out
    // I have ten chances
    var chances = 10;

    // When I am out of chances, "Game Over"
    if (chances === 0) {
        "Game Over"
    }


    // Once i have a key recorded, i want it to go into the html and replace the _ _ _ _ _ _ _ that was there before.
    // Once I have guessed the word correctly, another one appears
}