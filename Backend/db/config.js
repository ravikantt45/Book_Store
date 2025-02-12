



const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ravikant59826:wNR2FiuCRSUAn7l6@cluster0.d2uf3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connection successful');
  })
  .catch((error) => {
    console.error('No connection:', error);
  });
