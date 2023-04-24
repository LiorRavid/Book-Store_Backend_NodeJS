const mongoose = require('mongoose');
const db = process.env.MONGODB_URL;

mongoose.connect(db);