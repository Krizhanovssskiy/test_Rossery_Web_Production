const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { message: 'Render from Router!!!', title: 'webapp' })
});

module.exports = router;