const express = require('express');

module.exports = function (db) {
    const router = express.Router();

    // Example: Get all documents from a "users" collection
    router.get('/users', async (req, res) => {
        try {
            // const users = await db.collection('users').find().toArray();
            // res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // You can add more CRUD routes here (POST, PUT, DELETE, etc.)

    return router;
};
