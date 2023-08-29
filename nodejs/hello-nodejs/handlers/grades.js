const connection = require('../sqlConnection').connection;

function getGrades(req, res) {
    connection.query("SELECT * FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    });
}

function getGrade(req, res) {
    connection.query("SELECT * FROM `grades` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result.pop());
    });
}

function addGrade(req, res) {
    // יצירת משתמש חדש
    connection.query(
        "INSERT INTO `grades`(`date` ,`title`, `grade`) VALUES (?, ?, ?)",
        [req.body.date, req.body.grade,req.body.title],
        (err, result) => {
            if (err) {
                throw err;
            }

            // המזהה של השורה החדשה שהוספנו
            const insertId = result.insertId;

            // קבלת האובייקט החדש שנוסף
            connection.query("SELECT * FROM `grades` WHERE `id` = ?", [insertId], (err, result) => {
                if (err) {
                    throw err;
                }
        
                res.send(result.pop());
            });
        }
    );
}

function removeGrade(req, res) {
    connection.query("DELETE FROM `grades` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}


exports.getGrades = getGrades;
exports.getGrade = getGrade;
exports.addGrade=addGrade;
exports.removeGrade=removeGrade;