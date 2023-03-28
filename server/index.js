const express = require("express");
const db = require("./connection");
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const ApiRouter = require('./Routes/userRoute')


app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json());


PORT = process.env.PORT || 8080;

app.use('/api/',ApiRouter)

app.listen(PORT, () => {
  console.log(`Server Running on PORT:${PORT}`);
});
