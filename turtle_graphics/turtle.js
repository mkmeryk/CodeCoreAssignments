//Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates. 

class Turtle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.directionFacing = 'east'
        this.point= [[x,y]]
        this.max =[0,0]
    }
   

    /* Create a forward method that takes a number of steps then updates the Turtle instance with 
    its new position after moving that many steps. Keep track of every movement the turtle makes including the first one. */
    forward(step){
        if(this.directionFacing === 'east'){
            for(let i=step; i>0; i--){
                this.x+= 1
                this.point.push([this.x ,this.y])
            }
            console.log(`i am the updated x with the value of ${this.x} and the value y of ${this.y}`)
        }else if(this.directionFacing === 'west'){
            for(let i=step; i>0; i--){
                this.x -= 1
                this.point.push([this.x,this.y])
            }
            console.log(`i am the updated x with the value of ${this.x} and the value y of ${this.y}`)
        }else if(this.directionFacing === 'south'){
            for(let i=step; i>0; i--){
                this.y += 1
                this.point.push([this.x,this.y ])
            } 

            console.log(`i am the updated x with the value of ${this.x} and the value y of ${this.y}`)
        }
        else{
            for(let i=step; i>0; i--){
                this.y -= 1
                this.point.push([this.x,this.y])
            } 

            console.log(`i am the updated x with the value of ${this.x} and the value y of ${this.y}`)
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
        console.log(this.point)

    }

    maxLength(){
        let maxX = 0
        let maxY = 0
        for (var i = 0; i<this.point.length; i++){
            let valX = this.point[i][0] 
            let valY = this.point[i][1]
            if (valX > maxX){
                maxX = valX
            }
            if (valY > maxY){
                maxY = valY
            }
        }
        this.max = [maxX, maxY]

        console.log(this.max)
    }
    //Create a print method that draws the path that the turtle walked over as a string and logs it to the console. 
    //You should use the array of coordinates returned by .allPoints() as your starting point.
    print(){
        console.log('----')
        let path = ['']
        let tempPath = ''
        let arr = [[0,0],[0,1],[0,3],[1,3],[2,3]]
        // for(let i = 0; i <arr.length; i++){
        //     for(let arri = 2; arri > 0;arri--){
        //         tempPath += '-'
        //         path.push(tempPath)
        //         console.log('1')
        //     }
        //     console.log('2')
        // }
        // console.log(path)

        //test
        let testmax = [2,3]
    
        let testX = testmax[0]
        let testY = testmax [1]
        console.log(testmax)
        for(let i = 0; i<= testY ;i++){
            for(let j = 0; j <= testX ;j++){
                let found = false
                for( let move = 0; move < arr.length; move++){
                    if(arr[move][0] == j){
                        if(arr[move][1]==i){
                            tempPath = tempPath + 'x'
                            found = true
                        }
                    }
                }
                if(found == false){
                    tempPath = tempPath + 'y'
                }

            }
            tempPath = tempPath + '\n'
        }
        return tempPath
        
    }

}
   



const turtle = new Turtle(0,0);
console.log('turtle.forward(5)')
turtle.forward(5)
console.log('turtle.right()')
turtle.right()
console.log('turtle.forward(5)')
turtle.forward(5)
console.log('turtle.right()')
turtle.right()
console.log('turtle.forward(5)')
turtle.forward(5)
console.log('turtle.right()')
turtle.right()
console.log('turtle.forward(5)')
turtle.forward(5)
console.log('turtle.maxLength()')
turtle.maxLength()
turtle.allpoints()
turtle.print()

console.log(turtle.print())
console.log('hi')

// const flash = new Turtle(0, 4)
// flash.forward(3)
// flash.left()
// flash.forward(3);
// flash.maxLength()
// flash.allpoints()
