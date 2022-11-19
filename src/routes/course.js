const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/', courseController.index);
router.get('/create', courseController.create);
router.post('/create', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.remove);
router.get('/:slug', courseController.show);

module.exports = router;
