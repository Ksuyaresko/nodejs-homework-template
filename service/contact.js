const Contact = require('./schemas/contacts')

const getAllcontacts = async () => {
    return Contact.find()
}

const getContactById = (id) => {
    return Contact.findOne({ _id: id })
}

const createContact = (body) => {
    return Contact.create(body)
}

const updateContact = (id, fields) => {
    return Contact.findByIdAndUpdate({ _id: id }, fields, { new: true })
}

const updateContactStatus = (id, status) => {
    return Contact.findByIdAndUpdate({ _id: id }, { favorite: status }, { new: true })
}

const removeContact = (id) => {
    return Contact.findOneAndDelete({ _id: id })
}

module.exports = {
    getAllcontacts,
    getContactById,
    createContact,
    updateContact,
    removeContact,
    updateContactStatus,
}