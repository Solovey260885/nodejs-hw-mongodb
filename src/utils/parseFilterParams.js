import { typeList } from '../constans/contacts.js';

const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isContactType = (type) => typeList.includes(type);

  if (isContactType(type)) return type;
};

const parseIsFavourite = (isFavourite) => {
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;

  return undefined;
};

export const parseFilterParams = ({ type, isFavourite }) => {
  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return { contactType: parsedContactType, isFavourite: parsedIsFavourite };
};
