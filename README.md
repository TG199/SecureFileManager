## Overview

SecureFileManager is a Node.js application designed to manage files with support for image thumbnail generation, user/file statistics, and a queue-based worker for background processing. The system features a modular backend structure and utilizes MongoDB and Redis for persistent and queue data storage.

## Features
- RESTful API server built with Express
- Secure file upload and access
- User and file statistics endpoints
- Background worker for file/image processing and thumbnail creation
- Uses Bull queue for job management
- MongoDB as the primary database
- Redis for queue management
- Modern JavaScript tooling (Babel, ESLint)

## Getting Started

### Prerequisites
- Node.js (>=12)
- MongoDB
- Redis

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/TG199/SecureFileManager.git
   cd SecureFileManager
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables (see `.env.example` or `.env` file).

### Running the Server
- Start the API server:
  ```sh
  npm run start-server
  ```
- Start the background worker:
  ```sh
  npm run start-worker
  ```
### Verify it’s running
- In a new terminal, hit the status endpoint (adjust port if the console shows a different one):
```bash
curl http://localhost:5000/status
```
## Project Structure
- `server.js`: Entry point for the Express server
- `main.js`: Initial connection and statistics test script
- `worker.js`: Background worker for image thumbnail processing
- `controllers/`, `routes/`, `utils/`: Modular code organization

## API & Usage
- The API is exposed via Express and routes are organized under the `routes` directory.
- Key endpoints:
  - `GET /status`: Check application status
  - `POST /users`: Create a new user
  - `POST /files`: Upload a file
  - `GET /files/:id`: Retrieve a file
- More documentation coming soon.

## Contributing
Pull requests and issues are welcome. Please open an issue to discuss any major changes first.

## License
This project is licensed under the ISC License.
 ```
