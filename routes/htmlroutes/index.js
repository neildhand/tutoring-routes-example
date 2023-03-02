const router = require('express').Router();

// GET route to display our index.html
// since server.js has the middleware setting static files to the public folder, we can just put relative path from public folder inside res.render.
router.get('/', (req, res) => {
    res.render('index.html')
})

// export the router to be used in other files
module.exports = router;