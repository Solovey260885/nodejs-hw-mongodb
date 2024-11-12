import { Router } from 'express';
import contactsRouter from './contacts.js';
import autsRouter from './auth.js';

const router = Router();

router.post('/contacts', contactsRouter);
router.post('/auth', autsRouter);

export default router;
