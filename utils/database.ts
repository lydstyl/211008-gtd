import { MongoClient, MongoClientOptions } from 'mongodb'

const client = new MongoClient(
  process.env.MONGODB_URI as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions,
)

async function connect() {
  //   if (!client.isConnected()) await client.connect()
  await client.connect()

  const db = client.db('gtd')
  return { db, client }
}

export { connect }

//

// let cachedDb: Db
// let client: MongoClient

// export const connectToDatabase = async () => {
//   if (cachedDb) {
//     console.log('Existing cached connection found!')
//     return cachedDb
//   }

//   console.log('Aquiring new DB connection....')
//   try {
//     // Connect to our MongoDB database hosted on MongoDB Atlas

//     client = await MongoClient.connect(MONGODB_URI)

//     // Specify which database we want to use
//     const db = await client.db(DB_NAME)

//     cachedDb = db

//     return db
//   } catch (error) {
//     console.log('ERROR aquiring DB Connection!')
//     console.log(error)
//     throw error
//   }
// }
