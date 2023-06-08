const { Router } = require("express");

const { getTypesHandler } = require("../Handlers/TypeHandlers")

const typeRouter = Router();

typeRouter.get("/", getTypesHandler)

module.exports = typeRouter;