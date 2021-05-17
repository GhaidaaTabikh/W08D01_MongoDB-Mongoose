const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());



//qui1 practice

app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;
  const todoList = new todoModel({
    task,
    description,
    deadline,
    isCompleted,
    priority,
  });
  todoList
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log("ghaidaaerror");
      res.send(err);
    });
});

// qui3 practice
app.get("/todos", (req, res) => {
  todoModel
  .find({})
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  });
});

//qui4 practice
app.get("/todos", (req, res) => {
  todoModel
  .find({"isCompleted":true})
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  });
});

//qui5 practice
app.put("/update/todo", async (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body
  const updateTodo = await todo.findOne({task, description, deadline, isCompleted, priority })
  
  try{
    await mongoose.model('todo').update({ task: 'Ned Stark' }).j(true);}
  catch{res.json("new error")}
  
});
app.delete("/delete/todo", (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
