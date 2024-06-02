const { getAll, create, getOne, update, remove } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

// general path to interact with all users from db
userRouter.route("/")
		.get(getAll)
        .post(create)

// path to interact with a single user        
userRouter.route("/:id")
    .get(getOne)
    .delete(remove)
    .put(update)

module.exports = userRouter;