const categoriesRouter = require("express").Router();

const {
    findAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    checkIsCategoryExists,
    checkEmptyName
} = require("../middlewares/categories");

const {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryUpdated,
    sendCategoryDeleted
} = require("../controllers/categories");

const { checkAuth } = require("../middlewares/auth");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
  );

categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
);

categoriesRouter.delete(
    "/games/:id", 
    checkAuth,
    deleteCategory,
    sendCategoryDeleted 
  );

module.exports = categoriesRouter;