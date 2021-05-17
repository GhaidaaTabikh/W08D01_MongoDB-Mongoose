const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());

//que1 practice

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

// que3 practice
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

//que4 practice
// app.get("/todos", (req, res) => {
//   todoModel
//   .find({"isCompleted":true})
//   .then((result) => {
//     res.send(result);
//   })
//   .catch((err) => {
//     res.send(err);
//   });
// });

//que5 practice
app.put("/update/todo", async (req, res) => {
  try {
    await todoModel.update({ task: "lplk" }, { isCompleted: true }, () => {
      console.log("done");
      res.json("done");
    });
  } catch {
    res.json("new error");
  }
});

//que6 practice

app.delete("/delete/todo",  async (req, res) => {
  const ress = await todoModel.deleteOne({ task : 'sert' });
  
  console.log("delete");
  res.json("done")

  res.deletedCount;
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
