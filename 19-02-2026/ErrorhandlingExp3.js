const Promise = require('promise');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/Test08';
MongoClient.connect(url)
  .then(function (err,db){
    db.collection('Test').updateOne({
        "Name":"Joe"
    },
     {
        $set:{
            "Name":"Beck"
        }
     });


  })
  .catch(error=>alert(error,message));