import db from "../config/db.js";
 
// Get All Books
export const getBooks = (result) => {
    db.query("SELECT * FROM raamatud;", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Book
export const getBookByTitle = (title, result) => {
    db.query(`SELECT * FROM raamatud WHERE Pealkiri like ?`, [title], (err, results) => {      
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const insertBook = (data, result) => {
    db.query("INSERT INTO raamatud SET ?", [data], (err, results) => {      
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}