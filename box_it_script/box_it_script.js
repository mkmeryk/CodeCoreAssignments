//draw line function that takes a number as an argument and returns 
//the number of horizental bars as a string

// const { connect } = require("http2")
var line = ''

const drawLine = function(a){
    // var line = ''
    
    for(let i = a; i > 0; i--){
        let bar = '\u2550'
        line = line + bar
    }

    return line
}

// draw top border, draw middle border and draw bottom border function
//each function should take a number and return a line of length including including 
//corner pieces

//top border
function drawTopBorder(a){
    
    return '\u2554' + line + '\u2557'
}

//midlle border
function drawMiddleBorder(a){

    return '\u2560' + line + '\u2563'
}

//bottom border
function drawBottomBorder(a){
   
    return '\u255a' + line + '\u255d'
}


drawLine(7)
console.log(drawTopBorder(5))
console.log(drawMiddleBorder(5))
console.log(drawBottomBorder(5))