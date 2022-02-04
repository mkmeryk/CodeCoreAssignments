//calculating the max length by comparing all the elements in the given array of names
const maxLength = function(arr){
    let tempLength = 0
    for( let i = 0; i<arr.length ; i++){
        if(arr[i].length>tempLength){
            tempLength = arr[i].length
        }
    }
    return tempLength
}


//a function that takes a number and returns 
//the number of horizantal lines to draw a line 
const drawLine = function(a){
    let line = ''
    for(let i = a; i > 0; i--){
        let bar = '\u2550'
        line = line + bar
    }

    return line
}

//by implementing the drawLine function creating three new function that are 
//diffrent depenig on their position cpmaring to elements of the given array

//top border
function drawTopBorder(a){
    
    return '\u2554' + drawLine(a) + '\u2557'
}

//midlle border
function drawMiddleBorder(a){

    return '\u2560' + drawLine(a)  + '\u2563'
}

//bottom border
function drawBottomBorder(a){
   
    return '\u255a' + drawLine(a)  + '\u255d'
}

//draw barss around function which takes a string and surrounds itwith verstical lines
function drawBarsAround(str,arr){
    //since not all the elements have the same length, some of the shorter names require
    //more space after the name so that the side bars would be in line with the rest of lines
    let extraSpace = ''
    //checking if the given string is shorter than the max length to add more space to
    //the end of the name
    if(str.length < maxLength(arr)){
        const countSpace = maxLength(arr) - str.length
        for(i = countSpace; i > 0 ; i--)
        extraSpace = extraSpace + ' '
    }
    return '\u2551' + str + extraSpace + '\u2551'
}

//box it function that takes an array of string and returns a string in seprate lines
function boxIt(arr){
    //empty array as a container to box all before returning them as a string where each 
    //is in single column tables. using .join("\n")
    const tempArray = []

    //depending on what position in the array the string has in order to add diffrent parts of the box
    for(let i = 0; i <= arr.length; i++){
        if(i === 0){
            //if the string is the first position within the array, it start with adding the top border to
            //tempArray then takes the string addes bars around it and adds it the tempArray
            tempArray.push(drawTopBorder(maxLength(arr)))
            tempArray.push(drawBarsAround(arr[0],arr))
        }else if( i < arr.length ){
            //if it is any other postion in the array it draws the middle bars that would go between
            //two names and then takes the string and adds a border around it
            tempArray.push(drawMiddleBorder(maxLength(arr)))
            tempArray.push(drawBarsAround(arr[i],arr))
        }else{
            //if it is more than the length of the array meaning there are no more names to execute
            //it would draw the bottom line
            tempArray.push(drawBottomBorder(maxLength(arr)))
        }
    }

    //takes the tempArray and truns it into a string and would add new lines in betwwen each element of the array
    const boxIt = tempArray.join('\n')
    return boxIt
}


console.log(boxIt(['maybe','no','hello','hi','sammuel']))