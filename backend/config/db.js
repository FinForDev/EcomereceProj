require("dotenv").config();
const mongoose = require("mongoose");

/* 
const CONNECTION_URL = 'mongodb+srv://customDB:8995771a@cluster0.3u9vp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on ${PORT}`)))
    .catch((error) => console.log(error))
 */
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://user-123:8995771a@cluster0.fezvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
};

module.exports = connectDB;