import db from "../config/db.js";

export const insertUser = (data,result) => {
    db.query("SELECT * from kasutajad WHERE Email = ?", [data.Email], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else if(results[0] == null){
            db.query("INSERT INTO kasutajad SET ?", [data], (err, results) => {
                if(err) {
                    console.log(err);
                    result(err, null);
                } else {
                    result(null, results);
                }
            })
        } else {
            result({Error: 'Selle e-mailiga konto juba eksisteerib'})
        }
    })

    
}
// login
export const getUser = (data, result) => {
    db.query("SELECT Email, Parool, Kasutaja_ID FROM kasutajad where Email = ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getUserId = (data, result) => {
    db.query("SELECT Kasutaja_ID FROM kasutajad where Email = ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }else {
            result(null, results)
        }
    })
}