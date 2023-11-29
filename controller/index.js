const get = require('./contacts/get')
const getById = require('./contacts/getById')
const create = require('./contacts/create')
const update = require('./contacts/update')
const remove = require('./contacts/remove')
const patch = require('./contacts/patch')

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
    patch,
}
