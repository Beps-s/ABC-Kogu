import { getBooks, getBookByTitle } from "../models/bookModel.js";
 

export const showBooks = (req, res) => {
    getBooks((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showBookByTitle = (req, res) => {
    let title = req.params.title
    title = title.slice(1)
    title = '%' + title + '%'
    
    getBookByTitle(title, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}