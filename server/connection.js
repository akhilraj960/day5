const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/user';
mongoose.set('strictQuery', false);
async function connect() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connection established successfully');
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

 
connect();