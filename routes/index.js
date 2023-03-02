const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlroutes');
const router = require('express').Router();

// html routes will render in root /
// example: localhost:3000/ (will show our index.html file)
router.use('/', htmlRoutes)
// all api routes are prefixed by /api/
// example: localhost:3000/api/users (for user data)
router.use('/api', apiRoutes)

// export router to be used in server.js
module.exports = router;