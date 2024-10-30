import { Router } from 'express';

import {
  getContactByIdController,
  getContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactController));

router.get('/contacts/:id', ctrlWrapper(getContactByIdController));

export default router;
