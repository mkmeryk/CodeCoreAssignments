const readline = require('readline');
const interface = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdin,
        prompt : "> "
    }
);

let list = ['task1']

interface.prompt();
interface.on('line', line => {
    if(line == 'v'){

        view();

    }else if ( line == 'n'){

        console.log("new")
        console.log("what?")
        //readline not working
        interface.question("New Task: ", (newTask) =>{
            add(newTask);
        });
        // list.push(newTask);

    }else if( line == 'c'){

        console.log("compelete")

    }else if(line == 'd'){

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
    console.log("View");
    console.log(list)
    menu()
}

/*Add
From the Todo Menu pressing n then Enter should ask the user what 
item to add to the list. The user can then write a response. Save their response as 
a new item at the end of the todo list. */

function add(newTask){
    console.log(newTask)
    list.push(newTask)
    menu()
}

/* Complete
From the Todo Menu pressing cX where X refers to the index 
of a Todo item then Enter should mark that item as complete. 
Tell the user which item was marked. Then, re-display the Todo Menu.*/



/*Delete
From the Todo Menu pressing dX where X refers to the index 
of a Todo item then `Enter` should remove that from the list. 
Tell the user which item was deleted. Then, re-display the Todo Menu. */



/*Quit
From the Todo Menu pressing q quits the application. Say farewell. */
/* */


welcome();
