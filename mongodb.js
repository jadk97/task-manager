const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if(error){
    return console.log("Unable to connect to database");
  }

  // console.log("Successfully connected!");
  const db = client.db(databaseName);
  db.collection("users").insertOne({
    name: "JK",
    age: 22
  }, (error, result) => {
    if(error){
      return console.log("Unable to insert user");
    }

    console.log(result.ops);
  })
});