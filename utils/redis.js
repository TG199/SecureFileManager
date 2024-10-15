const redis = require('redis');
const promisify = require('util');

class RedisClient {
  constructor() {
    // Create the Redis client
    this.client = redis.createClient();

    // Handle Redis client errors
    this.client.on('error', (err) => {
      console.error(`Redis client error: ${err.message}`);
    });

    // Promisify Redis client methods for better async handling
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setAsync = promisify(this.client.set).bind(this.client);
    this.delAsync = promisify(this.client.del).bind(this.client);
  }

  /**
   * Checks if Redis client is alive
   * @returns {boolean} True if Redis client is connected, false otherwise
   */
  isAlive() {
    return this.client.connected;
  }

  /**
   * Gets the value associated with a key from Redis
   * @param {string} key - The Redis key
   * @returns {Promise<string | null>} The value for the key or null if the key doesn't exist
   */
  async get(key) {
    return this.getAsync(key);
  }

  /**
   * Sets a key-value pair in Redis with expiration
   * @param {string} key - The Redis key
   * @param {string} value - The value to store
   * @param {number} duration - The expiration duration in seconds
   * @returns {Promise<void>}
   */
  async set(key, value, duration) {
    await this.setAsync(key, value, 'EX', duration);
  }

  /**
   * Deletes a key-value pair from Redis
   * @param {string} key - The Redis key to delete
   * @returns {Promise<void>}
   */
  async del(key) {
    await this.delAsync(key);
  }
}

// Create and export an instance of RedisClient
const redisClient = new RedisClient();
export default redisClient;
