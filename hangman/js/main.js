$(document).ready(function(){

    //an array of words to be randomly selected for each round
    const keywords = ["greyling","greydwarf","brute","shaman","troll","ghost","abomination"];
    const keyword = keywords[Math.floor(Math.random() * (keywords.length))];

    //depending on the random selected word there will be blank spaces to be filled later
    let correctGuessed = [];
    for(let i=0 ; i <= (keyword.length)-1 ; i++){
        correctGuessed.push('_ ');
    }

    //how many guesses per game a user has
    let hearts = 6;
    let lettersClicked = "";

    //the letters on the keyboard
    const letters = document.querySelectorAll(".keyboard-letters");

    //audio file
    const failureSound = new Audio("staticAssets/sounds/failure.wav");
    failureSound.volume = 0.4

    const img0 = "./staticAssets/img/gallows+head.jpg";
    const img1 = "./staticAssets/img/gallows+head+torso.jpg";
    const img2 = "./staticAssets/img/gallows+head+torso+leg.jpg";
    const img3 = "./staticAssets/img/gallows+head+torso+2leg.jpg";
    const img4 = "./staticAssets/img/gallows+head+torso+2leg+arm.jpg";
    const img5 = "./staticAssets/img/gallows+head+torso+2leg+2arm.jpg";

    //array of images of different state of the hangman
    const images = [img5,img4,img3,img2,img1,img0];

    letters.forEach(node =>{
        node.addEventListener('click', event=>{

            //removing the getting started tag
            $('.msg').remove();

            //changing the color of a clicked letter
            event.target.classList.add("clicked");

            //storing the value of the clicked letter
            let clickedLetter = ($(event.target).html()).toLowerCase();

            //adding the stored clicked letter to a string of guessed letters
            lettersClicked += clickedLetter;

            // console.log('guessed: ',lettersClicked);
            //console.log(clickedLetter);

            //when a letter is clicked it can not be clicked again as it gets disabled 
            $(event.target).attr("disabled","true");

            //checking to see if the clicked letter is in the phrase
            if (keyword.includes(clickedLetter)) {

                //adding only the correct guessed letters
               
                
                //phrase action has 6 letters # # # # # # => if a is entered it should replace the first child
                //if n is entered it should be replaced with the last child or the 6th child

                //checking the index number of the guessed letter that exist in the phrase
                let currentCorrectGuessedIndex = keyword.indexOf(clickedLetter);
                while (currentCorrectGuessedIndex !== -1 && currentCorrectGuessedIndex < keyword.length) {
                    //correctGuessedIndices.push(currentCorrectGuessedIndex);
                    correctGuessed[currentCorrectGuessedIndex] = clickedLetter;
                    currentCorrectGuessedIndex = keyword.indexOf(clickedLetter,currentCorrectGuessedIndex+1)
                }

                //replacing the empty line with the correct guessed letter in an appropriate index 
                $('h1').html(`${correctGuessed.join('')}`);
                
                //finishing the game as a winner
                if((correctGuessed.includes('_ ')) !== true){
                    setTimeout(() => {
                        alert("Congrats you have won! Click okay to play another round"),
                        location.reload()
                    }, 500)
                }
            
            } else {

                //lower the hearts
                hearts -= 1

                //change the images accordingly to the amount of wronged guesses
                $("img").attr("src",images[hearts])
                
                //finishing the game as a lost round
                if(hearts <= 0){
                    failureSound.play();
                    alert("Game over try again, click ok to refresh the page");
                    location.reload();
                }

                
            }
        })
    })    

})








