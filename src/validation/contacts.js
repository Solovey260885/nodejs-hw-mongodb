import Joi from 'joi';
import { typeList } from '../constans/contacts.js';

export const createContactShema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().min(3).max(30).required(),
  email: Joi.string().min(3).max(30).email().required(),
  isFavorite: Joi.boolean().required(),
  contactType: Joi.string()
    .valid(...typeList)
    .required(),
});

export const patchContactShema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.string().min(3).max(30),
  email: Joi.string().min(3).max(30).email(),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid(...typeList),
});
