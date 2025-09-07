import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { getProducts } from '../controllers/product.controller.js'; 
import { createProduct } from '../controllers/product.controller.js';
import { deleteProduct } from '../controllers/product.controller.js';
import { updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Create a product
router.post("/", createProduct);

// Delete a product
router.delete("/:id", deleteProduct);

// Update a product
router.put("/:id", updateProduct);

export default router;
