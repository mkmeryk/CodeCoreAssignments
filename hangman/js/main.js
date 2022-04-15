$(document).ready(function(){
    let lettersClicked = "";
    const letters = document.querySelectorAll(".keyboard.letters")
    letters.forEach(node =>{
        node.addEventListener('click', event=>{
            console.log("event target: ",event.target);
            event.target.classList.add("clicked");
            console.log($(event.target).html())
            lettersClicked += $(event.target).html()
            console.log("hi",lettersClicked)    
        })
        
    })    
})








