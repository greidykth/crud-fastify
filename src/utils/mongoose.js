const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose
    .connect('mongodb://mongo/fastifycrud')
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => {
        console.log("Error while connecting database\n");
        console.log(err)
    });
