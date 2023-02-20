// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";
// import fileupload
import fileUpload from "express-fileupload";


// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());

// use router
app.use(Router);

// use static files
app.use(fileUpload())
app.use(express.static('images'));
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));