import * as controllers from '../controllers';
import { Router } from 'express';

const router = Router();    

router.post('/register', controllers.register)

module.exports = router;