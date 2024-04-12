import express from 'express';
import { Product } from '../models/productModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
