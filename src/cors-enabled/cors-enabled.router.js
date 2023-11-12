const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

//^1 when i want on specific methods: GET, POST, PUT, etc
//^1 const corsDelete = cors({methods: "DELETE"});

//^A when used for entire router
//^A router.use(cors())

router
  .route("/:corsId")
  //^R when used for all methods on a particular route
  //^R .all(cors())
  .get(controller.read)
  .put(controller.update)
  //^1 .delete(corsDelete, controller.delete)
  //^1 .options(corsDelete)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
