const { body } = require('express-validator');

const registerValidation = [
    body('email', 'Некорректный email').isEmail(),
    body('fullName', 'Некорректный fullName').isLength({ min: 3 }),
    body('password', 'Некорректный password').isLength({ min: 5 }),
    body('avatarUrl', 'Некорректный avatarUrl').optional().isURL(),
];

const loginValidation = [
    body('email', 'Некорректный email').isEmail(),
    body('password', 'Некорректный password').isLength({ min: 5 }),
];

const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({ max: 30, min: 3 }).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 10 }).isString(),
    body('tags', 'Неверный формат тэгов (укажите массив)').optional().isArray(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];

module.exports = { registerValidation, loginValidation, postCreateValidation };
