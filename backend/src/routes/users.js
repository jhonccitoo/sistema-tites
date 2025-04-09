const {Router}= require('express');

const router= Router();

const{getUsers,createtUser,deleteUser} =require('../controllers/user.controller.js')

router.route('/')
.get(getUsers)
.post(createtUser)


router.route('/:id')
.delete(deleteUser)

module.exports= router;