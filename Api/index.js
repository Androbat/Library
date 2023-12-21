const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const connectDB = require("./db");

// Routes
const bookRoutes = require('./routers/bookRouter');
const userRoutes = require('./routers/userRouter');
const authRoute = require('./routers/auth')

// Add the bodyParser middelware to the express application
app.use(express.json());

app.use('/book', bookRoutes);
app.use('/user', userRoutes);

// Authentication route
app.use('/auth', authRoute);



// Data base connection
connectDB();

app.listen(port, () => {
	console.log(`Success! Your application is running on port ${port}.`);
});



