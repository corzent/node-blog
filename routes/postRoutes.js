const express = require('express');
const router = express.Router();

const { postCreateValidation } = require('../validations');
const { checkAuth, handleValidationErrors } = require('../utils/index');
const { postController } = require('../controllers/index');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (_, __, cd) => {
        cd(null, 'uploads');
    },
    filename: (_, file, cd) => {
        cd(null, file.originalname);
    },
});

const upload = multer({ storage });

router.post('', checkAuth, postCreateValidation, handleValidationErrors, postController.create);
router.get('', postController.getAll);
router.get('/:id', postController.getOne);
router.patch(
    '/:id',
    checkAuth,
    postCreateValidation,
    handleValidationErrors,
    postController.update,
);
router.delete('/:id', checkAuth, postController.delete);

router.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

module.exports = router;
