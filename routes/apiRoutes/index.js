const userRoutes = require('./userRoutes');
const router = require('express').Router();

// all user routes will have to be accessed using /user/.
router.use('/users', userRoutes);

module.exports = router;