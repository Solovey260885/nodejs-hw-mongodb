import { Router } from 'express';

import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';
import {
  createContactShema,
  patchContactShema,
} from '../validation/contacts.js';

import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactController));

router.get('/contacts/:id', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/contacts',
  validateBody(createContactShema),
  ctrlWrapper(createContactController),
);

router.delete('/contacts/:id', isValidId, ctrlWrapper(deleteContactController));

router.patch(
  '/contacts/:id',
  isValidId,
  validateBody(patchContactShema),
  ctrlWrapper(patchContactController),
);

export default router;
