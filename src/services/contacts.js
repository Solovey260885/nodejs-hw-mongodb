import ContactCollection from '../db/models/Contact.js';

export const getContacts = () => {
  return ContactCollection.find();
};

export const getContactById = (id) => {
  return ContactCollection.findById(id);
};

export const createContact = async (payload) => {
  const contact = await ContactCollection.create(payload);
  return contact;
};

export const deleteContact = async (contactId) => {
  const contact = await ContactCollection.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};

export const updateContact = async ({ _id, payload, options = {} }) => {
  const rawResult = await ContactCollection.findOneAndUpdate(
    { _id: _id },
    payload,
    {
      ...options,
      new: true,
      includeResultMetadata: true,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult.lastErrorObject.upserted),
  };
};
