//Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates. 

class Turtle{
    constructor(x,y){
     this.x = x;
     this.y = y;
     this.dir = 'east'
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

    }

    //Create a left method like right but turns the turtle's facing to the left.
    left(){

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