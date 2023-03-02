/**
 * API routes are the routes used for the API portion of the project. They typically deal with data-handling. and look something like below.
 * In this example, the 'user' variable is being used as our 'database' with all of our user data.
 */

const router = require('express').Router();

let users = [{
    id: 1,
    name: 'Emma'
},
{
    id: 2,
    name: 'Neil'
}]

// GET route to get all users data.
router.get('/', (req, res) => {
    res.json(users);
})

// GET route to get specific user data by id. In this case, the id value is coming from a 'route param'. to use a route param you'll wanna use the :pramName syntax like below. you can access it using the req.params object. route params are always a string.
router.get('/:id', (req, res) => {
    const user = users.find(user => user.id == req.params.id);
    res.json(user);
});

// PUT routes are for updating. in this case, we find a user using the id in the route param to find the index then update it to be the data included in the request body.
router.put('/:id', (req, res) => {
    const index = users.findIndex(user => user.id == req.params.id);
    users[index] = req.body;
    res.json(users[index]);
});

// POST routes are for adding a new record. in this case we take data from the request body and add it to the users array then send it back in the response.
router.post('/',  (req, res) => {
    users.push(req.body);
    res.json(users[users.length-1]);
});

// DELETE is for deleting records. typically using a route param as well which lets us know which user to delete.
router.delete('/:id', (req, res) => {
    users = users.filter(user => user.id == req.params.id);
    res.json('user deleted');
});


// export the router to be used in other files
module.exports = router;