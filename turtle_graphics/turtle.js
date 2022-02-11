//Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates. 

class Turtle{
    constructor(x,y){
     this.x = x;
     this.y = y;
     this.directionFacing = 'east'
    }
   

    /* Create a forward method that takes a number of steps then updates the Turtle instance with 
    its new position after moving that many steps. Keep track of every movement the turtle makes including the first one. */
    forward(step){

        for(let i=step; i>0; i--){
        this.x += 1
        }

    }

    //Create a right method that takes zero arguments. When right is called, update the Turtle 
    //instance to rotate its facing to the right. A turtle should begin facing east.
    right(){

        if(this.directionFacing === 'east'){
            this.directionFacing = 'south'
            console.log(this.directionFacing)
        }else if(this.directionFacing === 'south'){
            this.directionFacing = 'west'
            console.log(this.directionFacing)
        }else if(this.directionFacing === 'west'){
            this.directionFacing = 'north'
            console.log(this.directionFacing)
        }else{
            this.directionFacing = 'east'
            console.log(this.directionFacing)
        }
    }

    //Create a left method like right but turns the turtle's facing to the left.
    left(){

        if(this.directionFacing === 'east'){
            this.directionFacing = 'north'
            console.log(this.directionFacing)
        }else if(this.directionFacing === 'north'){
            this.directionFacing = 'west'
            console.log(this.directionFacing)
        }else if(this.directionFacing === 'west'){
            this.directionFacing = 'south'
            console.log(this.directionFacing)
        }else{
            this.directionFacing = 'east'
            console.log(this.directionFacing)
        }
    }

    //Create an allPoints method which returns an array containing all coordinates the turtle has walked over.
    allpoints(){

    }

    //Create a print method that draws the path that the turtle walked over as a string and logs it to the console. 
    //You should use the array of coordinates returned by .allPoints() as your starting point.
    print(){

    }

}
   



const turtle = new Turtle(0,0);
turtle.forward(3)
turtle.right()
turtle.right()
turtle.right()
turtle.right()
turtle.left()
turtle.left()
turtle.left()
turtle.left()