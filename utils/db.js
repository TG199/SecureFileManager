const { MongoClient, ObjectId } = require('mongodb');

/**
 * Represents a MongoDB client for interacting with the database.
 */
class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const uri = `mongodb://${host}:${port}/${database}`;
    this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    this.connect();
    this.database = this.client.db();
  }

  /**
   * Connects to the MongoDB database.
   * @returns {Promise<void>} A promise that resolves when the connection is established.
   */
  async connect() {
    try {
      await this.client.connect();
      // console.log('Connected to MongoDB');
    } catch (error) {
      // console.error('Failed to connect to MongoDB:', error);
    }
  }

  /**
   * Checks if the database connection is alive.
   * @returns {boolean} Returns true if the database connection is alive, otherwise false.
   */
  isAlive() {
    return this.client.isConnected()
  }
  async nbUsers() {
    const usersCollection = this.database.collection('users');
    const count = await usersCollection.countDocuments();
    return count;
  }

  /**
   * Retrieves the number of files in the database.
   * @returns {Promise<number>} The number of files.
   */
  async nbFiles() {
    const filesCollection = this.database.collection('files');
    const count = await filesCollection.countDocuments();
    return count;
  }
}

const dbClient = new DBClient;
export default dbClient;
