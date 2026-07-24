# Node This and Know Peace

A basic Node.js Express setup project with an organized architectural structure.

## Features

- **Express.js** web framework
- **Dotenv** for environment variable management
- **Winston** for robust logging
- **HTTP Status Codes** for standardizing API responses
- MVC-inspired modular architecture

## Prerequisites

- [Node.js](https://nodejs.org/) (Ensure you have a recent version installed)
- npm

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd node-this-and-know-peace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   - Create a `.env` file in the root directory and add your necessary environment variables (e.g., `PORT`).
   - Copy the database configuration example:
     ```bash
     cp src/config/config.json.example src/config/config.json
     ```
     Then, update `src/config/config.json` with your actual database credentials.

4. **Run the application:**
   
   To run in development mode (uses `node --watch` for hot reloading):
   ```bash
   npm run dev
   ```

   To run in production mode:
   ```bash
   npm start
   ```

## Project Structure

```
src/
├── config/       # Configuration files and environment setups
├── controllers/  # Route handlers (logic for requests and responses)
├── middlewares/  # Express middlewares (e.g., request validation, error handling)
├── routes/       # API route definitions and endpoints
├── services/     # Business logic layer and external API interactions
├── utils/        # Shared utility functions and helpers
└── index.js      # Main application entry point
```

## Available Scripts

- `npm run dev`: Starts the server in watch mode for development.
- `npm start`: Starts the server normally.
- `npm test`: Placeholder for running tests.

## Author

- Mustapha Tijani
