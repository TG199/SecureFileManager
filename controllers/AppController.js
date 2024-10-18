const  redisClient  = require('../utils/redis');
const dbClient  = require('../utils/db');

class AppController {
    static async getStatus(request, response) {
        const redisAlive = redisClient.isAlive();
        const dbAlive = dbClient.isAlive();
        response.status(200).json({ redis: redisAlive, db: dbAlive })
    }

    static async getStats(request, response) {
        try {
            const userCount = await dbClient.nbUsers();
            const filesCount = await dbClient.nbFiles();
            response.status(200).json({ users: userCount, files: filesCount});

        } catch(error){
            console.error('Error fetching stats:', error);
            response.status(500).json({error: "Unable to fetch stats"})
        }
    }
}

module.exports = AppController;