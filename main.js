#! /usr/evn/bin node
import inquirer from "inquirer";
let todos = []; //Todo's store
let Loop = true;
let answers1;
let answers2;
let answers3;
async function startLoop() {
    while (Loop) {
        await displayMenuItem();
    }
}
startLoop();
async function displayMenuItem() {
    answers1 = await inquirer.prompt([
        {
            type: "list",
            name: "menuOtp",
            choices: [`Add Todo Item`, `Delete Todo Item`, `Exit`],
            message: `please select menu item:`
        }
    ]);
    switch (answers1.menuOtp) {
        case 'Add Todo Item': {
            await addTodo();
            break;
        }
        case `Delete Todo Item`: {
            await deleteTodo();
            break;
        }
        default: {
            Loop = false;
            console.log("Exit Program.");
            break;
        }
    }
}
async function addTodo() {
    answers2 = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: " Enter what to do? "
        }
    ]);
    todos.push(answers2.todo);
    console.log(todos);
}
async function deleteTodo() {
    if (todos.length > 0) {
        answers3 = await inquirer.prompt([
            {
                type: "list",
                name: "menuOtp",
                choices: todos,
                message: "please select TODO for delete:"
            }
        ]);
        let i = 0;
        do {
            if (todos[i] === answers3.menuOtp) {
                todos.splice(i, 1);
                break;
            }
            i++;
        } while (i < todos.length);
        console.log(todos);
    }
    else {
        console.log("No todo item to delete.");
    }
}
