import { Router } from 'express';

import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactController));

router.get('/contacts/:id', ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.delete('/contacts/:id', ctrlWrapper(deleteContactController));

router.patch('/contacts/:id', ctrlWrapper(patchContactController));

export default router;
