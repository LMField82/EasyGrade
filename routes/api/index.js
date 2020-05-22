const router = require("express").Router();
const studentRoutes = require ("./student-routes");
const assignmentRoutes = require("./assignment-routes");
const gradeRoutes = require("./grade-routes");

//Routes -- these all match with /api...
router.use("/students", studentRoutes);
router.use("/assignments", assignmentRoutes);
router.use("/grades", gradeRoutes);

module.exports = router;