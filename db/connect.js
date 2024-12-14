const mongoose = require('mongoose');

// const URI = "mongodb+srv://kurle776:ZbrIIpdHM95Urmwd@tk-cluster.upct3.mongodb.net/?retryWrites=true&w=majority&appName=TK-Cluster";

const connectDB = (URI) => {
    console.log("DB connected");
    return mongoose.connect(URI);
}

module.exports = connectDB;