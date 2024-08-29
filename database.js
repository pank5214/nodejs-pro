const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://pankaj:cl2HsF5ugvdk3Msv@nodepro.pdfiu.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected Successfully to the server!");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = [
    {
      firstName: "Katrina",
      lastName: "Kaif",
      city: "Mumbai",
      phoneNumber: 987722210,
    },
    {
      firstName: "MS",
      lastName: "Dhoni",
      city: "Ranchi",
      phoneNumber: 922722210,
    },
  ];

  /** Create */
//   const insertedResult = await collection.insertMany(data);
  // const insertedResult = await collection.insertOne(data);
//   console.log("Inserted documents => ", insertedResult);

  /** Read */
  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents => ", findResult);

  /** Filter documents */
  //   const filteredDocs = await collection
  //     .find({ firstName: "Katrina" })
  //     .toArray();
  //   console.log(
  //     "Found documents filtered by {firstName: Katrina } =>",
  //     filteredDocs
  //   );

  /** Update */
  //   const updateResult = await collection.updateOne(
  //     { firstName: "Vicky" },
  //     { $set: { phoneNumber: 7789612001 } }
  //   );

  //   console.log("updatedResult => ", updateResult);

  /** Delete */
  //   const deleteResult = await collection.deleteMany({ lastName: "Kaif" });
  //   console.log("Deleted documents =>", deleteResult);

  /** Total Count */
  const countResult = await collection.countDocuments({});
  console.log("count Result in the documents => ", countResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
