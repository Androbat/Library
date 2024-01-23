<<<<<<< Updated upstream
const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./db");
const morgan = require("morgan");
const { authorizeRequest } = require("./middleware/auth.mid");
const { login } = require("./controllers/auth");
const { createUser } = require("./controllers/auth")

// Routes
const bookRoutes = require('./routers/bookRouter');
const userRoutes = require('./routers/userRouter');





app.use(express.json());
app.use(morgan('dev'));


app.use('/user', authorizeRequest, userRoutes);




app.use('/api', authorizeRequest, bookRoutes);

app.post('/login', login);
app.post('/signin', createUser);



connectDB();

app.listen(port, () => {
	console.log(`Success! Your application is running on port ${port}.`);
=======
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
>>>>>>> Stashed changes
});



<<<<<<< Updated upstream
=======
app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
});
>>>>>>> Stashed changes
