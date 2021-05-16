const mongoose = require("mongoose");

//que2


const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  
  
  mongoose.connect("mongodb://localhost:27017/Pulse_Check", options).then(
    () => {
      console.log("DB Ready To Use");
    },
    (err) => {
      console.log(err);
    }
  );