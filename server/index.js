const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors")
const userRouter = require('./routes/user.routes');

app.use(cors())
app.use(express.urlencoded({limit:"500mb"}))
app.use(express.json({limit:"500mb"}))
app.use(express.static('public'));
app.use("/", userRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});