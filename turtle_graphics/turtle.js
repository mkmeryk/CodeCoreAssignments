//Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates. 

class Turtle{

    constructor(x,y){

        //the starting point of the turtle would be x and y
        this.x = x;
        this.y = y;

        //a defult value of the directiong that the turtle is facing
        this.directionFacing = 'east';

        //the point where the turtle would take depending on each method used
        this.point= [[x,y]];

        //the max value of all the x's and y's that the turtle has ever moved within
        this.max =[0,0];

    };
   

    /* Create a forward method that takes a number of steps then updates the Turtle instance with 
    its new position after moving that many steps. Keep track of every movement the turtle makes including the first one. */
    forward(step){

        if(this.directionFacing === 'east'){    //if the turtle is moving towards east it would add to it's original position

            for(let i=step; i>0; i--){
                this.x+= 1;
                this.point.push([this.x ,this.y]);
            };
            
        }else if(this.directionFacing === 'west'){    //if the turtle is moving towards west it would reduce from it's original position

            for(let i=step; i>0; i--){
                this.x -= 1;
                this.point.push([this.x,this.y]);
            };
            
        }else if(this.directionFacing === 'south'){    //if the turtle is moving towards south it would add to it's original position

            for(let i=step; i>0; i--){
                this.y += 1;
                this.point.push([this.x,this.y ]);
            }; 
            
        }else{    //if the turtle is moving towards north it would reduce from it's original position

            for(let i=step; i>0; i--){
                this.y -= 1;
                this.point.push([this.x,this.y]);
            };
            
        };
        
    };

    //Create a right method that takes zero arguments. When right is called, update the Turtle 
    //instance to rotate its facing to the right. A turtle should begin facing east.
    right(){
        
        if(this.directionFacing === 'east'){    //if the turtle is facing east then turning right would change it's facing direction to south
            
            this.directionFacing = 'south';
            
        }else if(this.directionFacing === 'south'){    //if the turtle is facing south then turning right would change it's facing direction to west

            this.directionFacing = 'west';
            
        }else if(this.directionFacing === 'west'){    //if the turtle is facing west then turning right would change it's facing direction to north
            
            this.directionFacing = 'north';

        }else{    //if the turtle is facing north then turning right would change it's facing direction to east

            this.directionFacing = 'east';
    
        };

    };

    //Create a left method like right but turns the turtle's facing to the left.
    left(){
        
        if(this.directionFacing === 'east'){    //if the turtle is facing east then turning left would change it's facing direction to north
            
            this.directionFacing = 'north';

        }else if(this.directionFacing === 'north'){    //if the turtle is facing north then turning left would change it's facing direction to west
            
            this.directionFacing = 'west';

        }else if(this.directionFacing === 'west'){    //if the turtle is facing west then turning left would change it's facing direction to south
            
            this.directionFacing = 'south';

        }else{    //if the turtle is facing south then turning left would change it's facing direction to east
            
            this.directionFacing = 'east';

        };

    };

    //Create an allPoints method which returns an array containing all coordinates the turtle has walked over.
    allpoints(){

        console.log(this.point);

    }

    maxLength(){

        //the max length is calculated of the highest x and the highest y the turtle has ever moved to
        let maxX = 0;
        let maxY = 0;

        for (var i = 0; i<this.point.length; i++){
            let valX = this.point[i][0] ;
            let valY = this.point[i][1];
            if (valX > maxX){
                maxX = valX;
            }
            if (valY > maxY){
                maxY = valY;
            }
        };

        this.max = [maxX, maxY];

    }

    //Create a print method that draws the path that the turtle walked over as a string and logs it to the console. 
    //You should use the array of coordinates returned by .allPoints() as your starting point.
    print(){

        this.maxLength();
        let path = '';
        let xMax = this.max[0];
        let yMax = this.max[1];

        //for every y
        for(let i = 0;i <= yMax ;i++){

            //for every x
            for(let j = 0; j <= xMax ; j++){

                let filledSquares = false;
                //for every position that the turtle has moved

                for(let moved = 0; moved < this.point.length; moved++){

                    if(this.point[moved][0] === j && this.point[moved][1] === i){

                        //for every point that the turtle has ever passed through 
                        //print a filled square
                        path = path + ` \u25a9`;
                        filledSquares = true;
                        break;
                    
                    };

                };

                //if the x and y are not the ones that are filled squares
                //print an empty square
                if(filledSquares == false){

                path = path + ` \u25a2`;

                };

            }; 

            //for every y of the maximum lenght add a 
            //line break and start from a new line
            path = path + '\n';

        };
        
        return console.log(path);

    };

};
   



const turtle = new Turtle(0,0);
turtle.forward(5);
turtle.right();
turtle.forward(5);
turtle.right();
turtle.forward(5);
turtle.right();
turtle.forward(5);
turtle.print();


const flash = new Turtle(0, 4);
flash.forward(3);
flash.left();
flash.forward(3);
flash.print();

const ttl = new Turtle(0,4);
ttl.forward(3);
ttl.left();
ttl.forward(3);
ttl.right();
ttl.forward(5);
ttl.right();
ttl.forward(8);
ttl.right();
ttl.forward(5);
ttl.right();
ttl.forward(3);
ttl.left();
ttl.forward(3);
ttl.print();

