
//tova  e nachaloto
// let input = prompt("what would you like to do?")
// while (input !== "quit") {
//     input =prompt("what would you like to do?")
// }

let input = prompt("what would you like to do?");
const todos = ['Collect Chicken Eggs', 'To finish my degree'];
while (input !== "quit") {
    if (input === "list") {
        console.log("**************");
        for (let i = 0; i < todos.length; i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.log("**************");
    } else if (input === "new") {
        const newTodo = prompt("What is the new to do?");
    // vzemame newTodo i go pushvame v areqta ot todos     
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === "delete") {
        const index = parseInt(prompt("What the fuck you want to delete succker ,index please ?"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Fine you win you deleted ${deleted[0]}, are you happy ???? `);
        } else {
            console.log("Unknown index")
        }
    }
    input = prompt("what would you like to do?");
};
console.log("OK,Quit the app!");

