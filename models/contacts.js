const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(process.cwd(), "models", "contacts.json");

const listContacts = async (req, res) => {
  try {
    const list =  JSON.parse(await fs.readFile(contactsPath, "utf-8"));
    res.json(list);
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
};

const getContactById = async (req, res) => {
  try {
    const list = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
    const contactData = list.find((item) => item.id === req.params.contactId);
    if (contactData === null) {
      res.status(404).json({ message: "Not found" });
    }
    res.json(contactData);
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
};

const removeContact = async (req, res) => {
  try {
    const list = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
    const removed = list.find((item) => item.id === req.params.contactId);
    if (removed) {
      const updatedList = list.filter((item) => item.id !== req.params.contactId);
      await fs.writeFile(contactsPath, JSON.stringify(updatedList, null, 2));
      res.json({ message: "contact deleted" });
    }
    res.status(404).json({ message: "Not found" });
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
};

const addContact = async (req, res) => {
  try {
    const newContact = {
      id: nanoid(),
      ...req.body,
    };
    const list = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
    const updatedList = [...list, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(updatedList, null, 2));
    res.status(201).json(newContact);
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
};

const updateContact = async (req, res) => {
  try {
    const list = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
    let updated;
    const updatedList = list.map((item) => {
      if (item.id === req.params.contactId) {
        updated = {
          ...item,
          ...req.body,
        };
        return updated;
      }
      return item;
    });
    await fs.writeFile(contactsPath, JSON.stringify(updatedList, null, 2));
    if (!updated) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.json(updated);
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
