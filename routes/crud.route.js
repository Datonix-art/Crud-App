import { Router } from 'express';
const router = Router();
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/crud.controllers.js'

// get all users
router.get('/users', getUsers)

// get user by id 
router.get('/users/:id', getUser)

// create user
router.post('/users', createUser)

// update user
router.put('/users/:id', updateUser)

// delete user
router.delete('/users/:id', deleteUser)


export default router