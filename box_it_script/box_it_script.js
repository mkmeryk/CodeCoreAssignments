//draw line function that takes a number as an argument and returns 
//the number of horizental bars as a string

// const { connect } = require("http2")

function drawLine (a){
    let line = ''

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
    let topLine = ''
    for(let y = a; y > 0; y--){
        let bar = '\u2550'
        topLine = topLine + bar
    }
    
    return '\u2554' + topLine + '\u2557'
}

//midlle border
function drawMiddleBorder(a){
    let middleLine = ''
    for(let l = a; l > 0; l--){
        let bar = '\u2550'
        middleLine = middleLine + bar
    }
    return '\u2560' + middleLine + '\u2563'
}

//bottom border
function drawBottomBorder(a){
    let bottomLine = ''
    for( let j = a ; j > 0 ; j--){
        let bar = '\u2550'
        bottomLine = bottomLine + bar
    }
    return '\u255a' + bottomLine + '\u255d'
}


console.log(drawLine(2))
console.log(drawTopBorder(5))
console.log(drawMiddleBorder(5))
console.log(drawBottomBorder(5))