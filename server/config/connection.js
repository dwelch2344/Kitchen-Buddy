const mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb://localhost/kitchen-buddy';
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;