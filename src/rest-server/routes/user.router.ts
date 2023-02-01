import { Router, Request, Response, NextFunction } from "express";
import {UserController} from '../controllers/user.controller'

const express = require('express');


//let userService:UserService = require('../../domain/services/user.service');
const service = new UserService();
const router = express.Router();
const controller = new UserController();


router.get('/:username', controller.findUser);

// router.get('/:username',
//   async (req:Request<{username:string}> , res:Response , next:NextFunction ) => {
//     try {
//         const { username } = req.params;
//         const user = await service.findOne(username);
//         return res.json(user);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;