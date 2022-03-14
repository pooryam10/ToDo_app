
const Todo = require('../model/toDo');

// const {getTodoCompleted, getRemainingTodos} = require('../utils/todos');

exports.showTodos = async (req, res) =>{

    // Todo.count({where: {completed: true}}).then(completedTodos =>{

    //     Todo.findAll().then(todos =>{
    
    //         res.render("index", {pageTitle: "My ToDo App", todos: todos, completedTodos: completedTodos, unCompletedTodos: todos.length - completedTodos});
    
    //     })

    // })

    const completedTodos = await Todo.countDocuments({completed: true});
    const todos = await Todo.find();

    res.render("index", {pageTitle: "My ToDo App", todos: todos, completedTodos: completedTodos, unCompletedTodos: todos.length - completedTodos});

}
