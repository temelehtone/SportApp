import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        res.status(200).json({message: "THIS WORKS"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
}

export default router;