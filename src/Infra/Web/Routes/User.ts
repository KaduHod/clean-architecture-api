import {Router} from 'express'
import UserController from '../Controllers/User';

const router = Router()

router.get('/:id', UserController.user)

export {router};