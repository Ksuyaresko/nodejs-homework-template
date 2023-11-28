const service = require('../service')
const fs = require("fs/promises");

const get = async (req, res, next) => {
    try {
        const results = await service.getAllcontacts()
        res.status(200).json(results)
    } catch (e) {
        console.error(e)
        next(e)
    }
}

const getById = async (req, res, next) => {
    try {
        const contactData = await service.getContactById(req.params.contactId);
        console.log('contactData', contactData)
        if (contactData === null) {
            res.status(404).json({ message: "Not found" });
        }
        res.json(contactData);
    } catch (e) {
        console.error(e)
        next(e)
    }
};

const create = async (req, res, next) => {
    try {
        const result = await service.createContact(req.body)
        res.status(201).json(result)
    } catch (e) {
        console.error(e)
        next(e)
    }
}
const update = async (req, res, next) => {
    try {
        const result = await service.updateContact(req.params.contactId, req.body)
        if (result) {
            res.json(result)
        } else {
            res.status(404).json({
                message: `Not found task id: ${req.params.contactId}`
            })
        }
    } catch (e) {
        console.error(e)
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await service.removeContact(req.params.contactId)
        if (result) {
            res.json(result)
        } else {
            res.status(404).json({
                message: `Not found task id: ${req.params.contactId}`,
            })
        }
    } catch (e) {
        console.error(e)
        next(e)
    }
}

const patch = async (req, res, next) => {
    try {
        const result = await service.updateContactStatus(req.params.contactId, req.body.favorite)
        if (result) {
            res.json(result)
        } else {
            res.status(404).json({
                message: `Not found}`
            })
        }
    } catch (e) {
        console.error(e)
        next(e)
    }
}
module.exports = {
    get,
    getById,
    create,
    update,
    remove,
    patch,
}
