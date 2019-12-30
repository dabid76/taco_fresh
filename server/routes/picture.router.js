const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "pictures" ORDER BY "id" ASC;')
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });
}); // end router.GET

module.exports = router
