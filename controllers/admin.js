
const Todo = require('../model/toDo');
// const {generateRandomId} = require('../utils/todos');

exports.addTodo = async (req, res) => {
    if (!req.body.todo) return res.redirect("/");

    // Todo.create({ text: req.body.todo }).then(result => {

    //     console.log(result);
    //     res.redirect("/");

    // }).catch(err => console.log(err));

    try {
        await Todo.create({ text: req.body.todo });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }

}

exports.deleteTodo = async (req, res) => {
    // Todo.destroy({ where: { id: req.params.id } }).then(() => {
    //     res.redirect("/");
    // }).catch(err => console.log(err));

    try {
        await Todo.findByIdAndRemove(req.params.id);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }

}


exports.completeTodo = async (req, res) => {

    // Todo.findByPk(req.params.id).then(todo => {
    //     todo.completed = true;
    //     return todo.save();
    // }).then(() => res.redirect("/")).
    //     catch(err => console.log(err))

    try {
        const todo = await Todo.findById(req.params.id);
        todo.completed = true;
        await todo.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }

}
