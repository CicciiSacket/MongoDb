import express from 'express'
import bodyParser from "body-parser"
import * as UserController from "../controllers/users"
export const router = express.Router()

router.get('/', UserController.getUsers)
router.post('/',UserController.addUser)
router.post('/:id',UserController.updateUsers)
router.delete('/:id',UserController.deleteUser)