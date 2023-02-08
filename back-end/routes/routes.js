// import express
import express from "express";

// import function from controller
import { showBooks, showBookByTitle } from "../controllers/book.js";

// init express router
const router = express.Router();

// Get All Product
router.get('/books', showBooks);

// Get Single Product
router.get('/books/:title', showBookByTitle);

// export default router
export default router;