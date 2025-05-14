const express = require('express');
const { MongoClient } = require('mongodb');
const crudRoutes = require('./routes');

const app = express();
const PORT = 4003;

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'test123';

async function startServer() {
    try {
        console.log("Connecting to MongoDB...");
        const client = await MongoClient.connect(mongoUrl);
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        app.use('/api', crudRoutes);

        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Error starting server:", error);
    }
}

startServer();
