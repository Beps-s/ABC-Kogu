// import express
import express from "express";

// import function from controller
import { showBooks, showBookByTitle, createBook } from "../controllers/book.js";
import { uploadImage } from '../controllers/images.js'
import { createUser, loginUser, logoutUser } from "../controllers/user.js";

// init express router
const router = express.Router();

// Get All Product
router.get('/books', showBooks);

// Get Single Product
router.get('/books/:title', showBookByTitle);

// Add New Book
router.post('/books', createBook);

// Add New User
router.post('/users', createUser);

// Login User
router.post('/sessions', loginUser);

// Logout User
router.delete('/sessions', logoutUser);

// Upload Image
router.post('/upload', uploadImage);

// export default router
export default router;