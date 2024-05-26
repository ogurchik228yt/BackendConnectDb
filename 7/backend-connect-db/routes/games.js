const gamesRouter = require("express").Router();

const {
    findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsGameExists
} = require("../middlewares/games");

const {
    sendAllGames,
    sendGameCreated,
    sendGameUpdated,
    sendGameDeleted
} = require("../controllers/games");

const { checkAuth } = require("../middlewares/auth");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
); 
gamesRouter.put(
    "/games/:id", 
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  );
gamesRouter.delete(
    "/games/:id",
    checkAuth, 
    deleteGame,
    sendGameDeleted 
  );

module.exports = gamesRouter;