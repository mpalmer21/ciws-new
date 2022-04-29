const express = require("express");
const router = express.Router();

const {
  addNewPart,
  getParts,
  getPart,
  UpdatePart,
  deletePart,
} = require("../controllers/partController.js");

router.route("/parts").get(getParts);
// POST endpoint
router.route("/parts").post(addNewPart);
// Get specific part
router.route("/parts/:id").get(getPart);
// update a specific part
router.route("/parts/:id").put(UpdatePart);
// update a specific part
router.route("/parts/:id").delete(deletePart);

module.exports = router;
