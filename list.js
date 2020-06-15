var todos = ["Buy Oz"];

var input = prompt('What would you like to do?')

while(input !== "Quit") {

    if(input === "List") {
    console.log(todos);
    } else if (input === "New") {
    var newTodo = prompt("Enter new Todo");
    todos.push(newTodo);
}
    input = prompt('What would you like to do?')
}
console.log("Ok, You Quit The App")