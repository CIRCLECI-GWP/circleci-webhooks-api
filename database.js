const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
const data = require("./data");

let mongo = null;
let client = null;
let databasePromise = null;

async function connectAndSeed() {
  mongo = await MongoMemoryServer.create();
  client = await MongoClient.connect(mongo.getUri());

  //Seed Database
  const database = client.db();
  await database.collection("webhooks").insertMany(data.Webhooks);

  return database;
}

// Start the in-memory database once and reuse it for every request
function startDatabase() {
  if (!databasePromise) {
    databasePromise = connectAndSeed();
  }

  return databasePromise;
}

async function stopDatabase() {
  if (client) await client.close();
  if (mongo) await mongo.stop();
}

module.exports = {
  startDatabase,
  stopDatabase
};
