const catchError = require('../utils/catchError');
const User = require('../models/User');

// scope for querying all users
const getAll = catchError(async (req, res) => {
    const users = await User.findAll()
    // here is where we create the methods to interact with api calls...
    return res.json(users)
})
// scope for creating a user
const create = catchError(async (req, res) => {
    const user = req.body
    const createUser = await User.create(user)
    return res.status(201).json(createUser)
})
// scope for querying a single user
const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({
        message: "User not found"
    })
    return res.json(user)
})

// scope for removing a user
const remove = catchError(async (req, res) => {
    const { id } = req.params
    const removeUser = await User.destroy({ where: { id } })
    if (!removeUser) return res.status(404).json({ message: "User not found" })
    return res.sendStatus(204)
})

// scope for updating a user
const update = catchError(async (req, res) => {
    const { id } = req.params
    const user = req.body

    const updateUser = await User.update(user, { where: { id }, returning: true })
    if(updateUser[0]===0)return res.status(404).json({ message: "User not found" })
    return res.json(updateUser[1][0])
})

// exports to be available withing the environment in the routes section
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}