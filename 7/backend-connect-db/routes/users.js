const usersRouter = require("express").Router();

const {
    findAllUsers,
    createUser,
    updateUser,
    deleteUser,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    hashPassword
} = require("../middlewares/users");

const {
    sendAllUsers,
    sendUserCreated,
    sendUserUpdated,
    sendUserDeleted,
    sendMe
} = require("../controllers/users");

const { checkAuth } = require("../middlewares/auth");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    //checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    hashPassword,
    checkAuth,
    createUser,
    sendUserCreated
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);

usersRouter.delete(
    "/games/:id", 
    checkAuth,
    deleteUser,
    sendUserDeleted 
);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;