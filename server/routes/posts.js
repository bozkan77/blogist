import express from "express";
// constrollers
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

export default router;