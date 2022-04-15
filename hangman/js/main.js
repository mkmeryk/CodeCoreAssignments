$(document).ready(function(){

    // const keywords = ["greyling","greydwarf","brute","shaman","troll","ghost","abomination"];
    // const keyword = keywords[Math.floor(Math.random() * (keywords.length))];
    // console.log(keyword.length);
    // let correctGuessed = [];
    // for(let i=0 ; i <= keyword.length ; i++){
    //     correctGuessed += '_ '
    // }
    // console.log(correctGuessed);

    let hearts = 6;
    let lettersClicked = "";
    let correctGuessed = ['_ ','_ ','_ ','_ ','_ ','_ '];
    const keyword = "action";
    const letters = document.querySelectorAll(".keyboard-letters");
    const failureSound = new Audio("staticAssets/sounds/failure.wav");
    failureSound.volume = 0.4

    
    const img0 = "./staticAssets/img/gallows+head.jpg";
    const img1 = "./staticAssets/img/gallows+head+torso.jpg";
    const img2 = "./staticAssets/img/gallows+head+torso+leg.jpg";
    const img3 = "./staticAssets/img/gallows+head+torso+2leg.jpg";
    const img4 = "./staticAssets/img/gallows+head+torso+2leg+arm.jpg";
    const img5 = "./staticAssets/img/gallows+head+torso+2leg+2arm.jpg";

    const images = [img5,img4,img3,img2,img1,img0];

    letters.forEach(node =>{
        node.addEventListener('click', event=>{
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
                // correctGuessed += clickedLetter
                
                //phrase action has 6 letters # # # # # # => if a is entered it should replace the first child
                //if n is entered it should be replaced with the last child or the 6th child

                //checking the index number of the guessed letter that exist in the phrase
                let correctGuessedIndex = keyword.indexOf(clickedLetter);
                correctGuessed.forEach(element => {
                    correctGuessed[correctGuessedIndex] = clickedLetter
                });

                //replacing the empty line with the correct guessed letter in an appropriate index 
                $('h1').html(`${correctGuessed.join('')}`)
                
                //finishing the game
                if((correctGuessed.includes('_ ')) !== true){
                    alert("Congrats you have won! Click okay to play another round");
                    location.reload();
                }
                
            } else {

                //lower the hearts
                hearts -= 1

                //change the images accordingly to the amount of wronged guesses
                $("img").attr("src",images[hearts])
                

                if(hearts <= 0){
                    failureSound.play();
                    alert("Game over try again, click ok to refresh the page");
                    location.reload();
                }

                
            }
        })
    })    
})








