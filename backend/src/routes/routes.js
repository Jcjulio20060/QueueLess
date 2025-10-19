const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');

router.get('/', (req, res) => res.sendStatus(200).send('API is running'));
router.get("/api/auth", authRoutes);

module.exports = router;