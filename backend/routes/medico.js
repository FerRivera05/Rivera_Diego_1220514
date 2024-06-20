const express = require('express');
const router = express.Router();

const medicoController = require('../controllers/medicoController');
router.get('/', medicoController.list);
router.post('/', medicoController.save);
router.delete('/:MED_ID', medicoController.delete);
router.get('/:MED_ID', medicoController.edit);
router.post('/:MED_ID', medicoController.update);

module.exports = router;