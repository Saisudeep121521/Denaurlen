const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');

dotenv.config();

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Denaurlen', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Create UserModel from User schema
const UserModel = require('./users.js');

// Function to save a new user
const saveUser = async (userData) => {
  console.log('Saving user:', userData);
  try {
    const user = new UserModel(userData);
    await user.save();
    console.log('User saved:', user);
    return user;
  } catch (error) {
    console.error('Error saving user:', error);
    throw error;
  }
};

// Signup and login routes
app.use("/email", emailRoutes);
// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Endpoint to retrieve all users
app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to save a new user
app.post("/users", (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});


// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
