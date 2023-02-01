import { Router } from "express";

const express = require('express');

const service = new UserService();
const router = express.Router();


router.get('/:id',
  async (req: any, res: any, next: any) => {
    try {
        const { id } = req.params;
        const user = await service.findOne(id);
        res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;