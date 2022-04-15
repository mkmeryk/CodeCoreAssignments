$(document).ready(function(){

    let lettersClicked = "";
    let correctGuessed = ['_ ','_ ','_ ','_ ','_ ','_ '];
    const keyword = "action";
    const letters = document.querySelectorAll(".keyboard-letters");

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
                // $("#guess-bar").last().prepend(`<h1 class="guess-bar-line">${correctGuessed}</h1>`);
                
                
            }
            
        })
        
    })    
})








