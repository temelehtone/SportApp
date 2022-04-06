import express from "express";

import { createAccount, login } from "../controllers/auth.js";

const router = express.Router();


router.post("/createAccount", createAccount);
router.post("/login", login);



export default router