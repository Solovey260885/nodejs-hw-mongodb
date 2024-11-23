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
import { authenticate } from '../middlewares/authenticate.js';

import { upload } from '../middlewares/upload.js';

const router = Router();
router.use(authenticate);

router.get('/contacts', ctrlWrapper(getContactController));

router.get('/contacts/:id', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/contacts',
  upload.single('photo'),
  validateBody(createContactShema),
  ctrlWrapper(createContactController),
);

router.delete('/contacts/:id', isValidId, ctrlWrapper(deleteContactController));

router.patch(
  '/contacts/:id',
  upload.single('photo'),
  isValidId,
  validateBody(patchContactShema),
  ctrlWrapper(patchContactController),
);

export default router;
