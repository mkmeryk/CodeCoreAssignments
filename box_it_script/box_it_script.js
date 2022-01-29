//draw line function that takes a number as an argument and returns 
//the number of horizental bars as a string

function drawLine (a){
    let line = ''

    for(let i = a; i > 0; i--){
        let bar = '_'
        line = line + bar
    }

    return line
}

