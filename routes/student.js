const express = require('express');
const { getAllStudents, addStudent } = require('../controllers/student');
const router = express.Router();
const auth = require("../utils/jwt")

router.get('/all', auth, getAllStudents);
router.post('/add', auth, addStudent);

module.exports = router;