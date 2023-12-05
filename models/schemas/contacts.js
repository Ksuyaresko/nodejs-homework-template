const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;

const contact = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for contact'],
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        favorite: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        }
    },
    { versionKey: false, timestamps: true }
);

const contactSchema = Joi.object({
    name: Joi.string().required().messages({ "any.required": "missing required name field" }),
    email: Joi.string().required().messages({ "any.required": "missing required email field" }),
    phone: Joi.string().required().messages({ "any.required": "missing required phone field" }),
    favorite: Joi.bool(),
});

const Contact = mongoose.model("contact", contact);

module.exports = { Contact, contactSchema };