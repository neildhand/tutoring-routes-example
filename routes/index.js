const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlroutes');
const router = require('express').Router();

// display html routes in root /
// example: localhost:3000/ (will show our index.html file)
router.use('/', htmlRoutes)
// all api routes are prefixed by /api/
// example: localhost:3000/api/users (for user data)
router.use('/api', apiRoutes)

module.exports = router;