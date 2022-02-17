const readline = require('readline');
const interface = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdin,
        prompt : "> "
    }
);

let list = []

interface.prompt();
interface.on('line', line => {
    if(line == 'v'){

        view();

    }else if ( line == 'n'){
    
        interface.question("New Task: ", (newTask) =>{
            add({newTask:newTask , completed:false});
        });
    

    }else if(line[0] == 'c'){

        completed(line[1]);

    }else if(line[0] == 'd'){

        console.log("delete")

    }else if( line == 'q'){

        process.exit();

    }else{

        console.log("undefined task")
    }

})

/*The Menu
When the todoCLI.js is first executed, a menu as shown below should be displayed. 
These are all the options the user should be able to perform.*/

function welcome(){
    console.log(`\nWelcome to Todo CLI! \n------------------- \n(v)View \u2022 (n)New \u2022 (cX)Complete \u2022 (dX)Delete \u2022 (q)Quit \n`)
}

function menu(){
    console.log(`\n(v)View \u2022 (n)New \u2022 (cX)Complete \u2022 (dX)Delete \u2022 (q)Quit \n`);
};


/* View
From the Todo Menu, pressing v then Enter should display the contents
of the todo list then the Todo Menu again. See the example below.*/

function view(){

    for( let i = 0; i< list.length; i++){

        let numberOfTask = i + 1;
        if(list[i].completed == false){
            console.log( numberOfTask + "[  ]" + list[i].newTask);
        }else{
            console.log( numberOfTask + "[✓ ]" + list[i].newTask);
        }
        
    }
    menu()
}

/*Add
From the Todo Menu pressing n then Enter should ask the user what 
item to add to the list. The user can then write a response. Save their response as 
a new item at the end of the todo list. */

function add(newTask){
    console.log(newTask);
    list.push(newTask);
    menu();
}

/* Complete
From the Todo Menu pressing cX where X refers to the index 
of a Todo item then Enter should mark that item as complete. 
Tell the user which item was marked. Then, re-display the Todo Menu.*/

function completed(n){

    (list[n-1]).completed = true;
    console.log(`Completed task: ${(list[n-1]).newTask}`);

}

/*Delete
From the Todo Menu pressing dX where X refers to the index 
of a Todo item then `Enter` should remove that from the list. 
Tell the user which item was deleted. Then, re-display the Todo Menu. */



/*Quit
From the Todo Menu pressing q quits the application. Say farewell. */
/* */


welcome();
