const readline = require('readline');
const interface = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdin,
        prompt : "> "
    }
);

//an empty array for to do items
let list = []

interface.prompt();
interface.on('line', line => {
    
    if(line == 'v'){    //View function to print all the tasks
        
        view();

    }else if ( line == 'n'){    //New function to add a new task which has a task name and a bloolean value to calculate if the task has been completed or not
    
        console.log("What?")
        interface.question("", (newTask) =>{
            add({newTask:newTask , completed:false});
        });
    

    }else if(line[0] == 'c'){    //Compelete function in which a the input is followed by a number that identifies which task is supposed to be completed and would return the completed task to the user

        completed(line[1]);

    }else if(line[0] == 'd'){    //Delete function in which a the input is followed by a number that identifies which task is supposed to be deleted and would return the deleted task to the user

        del(line[1]);

    }else if( line == 'q'){    //Quit function which print a good bye message and quit the program

        quit();

    }else{

        console.log("undefined task")    //In the event of user inputing an un identified input/task it would show an error message
    }

})

/*The Menu
When the todoCLI.js is first executed, a menu as shown below should be displayed. 
These are all the options the user should be able to perform.*/


console.log(`\nWelcome to Todo CLI! \n------------------- \n(v)View \u2022 (n)New \u2022 (cX)Complete \u2022 (dX)Delete \u2022 (q)Quit \n`)


function menu(){
    console.log(`\n(v)View \u2022 (n)New \u2022 (cX)Complete \u2022 (dX)Delete \u2022 (q)Quit \n`);
};


/* View
From the Todo Menu, pressing v then Enter should display the contents
of the todo list then the Todo Menu again. See the example below.*/

function view(){

    if(list.length == 0){    //If there is no tasks in the the todo list it would print a message and would ask for more input

        console.log("List is empty...");
    
    }else{

        for( let i = 0; i< list.length; i++){    //For each item in the list it would check to see if it has been completed or not and would print it diffrently depending on if the item has a value of ture or false

            let numberOfTask = i;
            if(list[i].completed == false){    //If the items complete value is false would show it as a task waiting to be compeleted
                console.log( numberOfTask + "-[  ] " + list[i].newTask);    
            }else{    //if the items complete value is trueit would show the item with a check mark to indicate that the item has been completed
                console.log( numberOfTask + "-[✓ ] " + list[i].newTask);
            }
            
        }

    }

    menu();

}

/*Add
From the Todo Menu pressing n then Enter should ask the user what 
item to add to the list. The user can then write a response. Save their response as 
a new item at the end of the todo list. */

function add(newTask){

    list.push(newTask);    //would add the new give task with the defult completed value of false to the list
    menu();

}

/* Complete
From the Todo Menu pressing cX where X refers to the index 
of a Todo item then Enter should mark that item as complete. 
Tell the user which item was marked. Then, re-display the Todo Menu.*/

function completed(n){

    if(n>list.length || n < 0 || isNaN(n) == true || list.length == 0){    //checks for invalid inputs
        console.log("Invalid task number, please refer to the number printed by each task")
    }else{
        (list[n]).completed = true;    //changes the completed value of the item with the index of n to true 
        console.log(`Completed task: ${list[n].newTask}`);
    }
    
}

/*Delete
From the Todo Menu pressing dX where X refers to the index 
of a Todo item then `Enter` should remove that from the list. 
Tell the user which item was deleted. Then, re-display the Todo Menu. */

//since the delete frase is a js reserved frase del stands for delete
function del(n){

    if(n>list.length || n < 0 || isNaN(n) == true || list.length == 0){    //checks for invalid inputs
        console.log("Invalid task number, please refer to the number printed by each task")
    }else{
        console.log(`Deleted task: ${list[n].newTask}`);
        list.splice(n);    //removes the item with the index of n
    }
  
}


/*Quit
From the Todo Menu pressing q quits the application. Say farewell. */
/* */


function quit(){

    console.log("See you soon!");
    process.exit();    //stops asking for user inputs

}


