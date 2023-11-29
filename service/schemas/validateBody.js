const Joi = require("joi");

const validateBody = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required().messages({ "any.required": "missing required name field" }),
        email: Joi.string().required().messages({ "any.required": "missing required email field" }),
        phone: Joi.string().required().messages({ "any.required": "missing required phone field" }),
    });
    const isValid = schema.validate(req.body);
    if (isValid.error) {
        res.status(400).json({ message: isValid.error.details[0].message });
    }
    next()
};

module.exports = validateBody