const db = require("../config/db")

exports.createTask = (req, res) => {

  const { title, description } = req.body

  const sql =
    "INSERT INTO tasks (title,completed,user_id) VALUES (?,?,?)"

  db.query(sql, [title, description, req.user.id], (err) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json("Task created")

  })
}


exports.getTasks = (req, res) => {

  const sql = "SELECT * FROM tasks WHERE user_id=?"

  db.query(sql, [req.user.id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json(result)

  })
}


exports.updateTask = (req, res) => {

 const { completed } = req.body;

 db.query(
"UPDATE tasks SET completed=? WHERE id=?",
[completed, req.params.id]
);

  db.query(sql, [title, description, req.params.id], (err) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json("Task updated")

  })
}


exports.deleteTask = (req, res) => {

  const sql = "DELETE FROM tasks WHERE id=?"

  db.query(sql, [req.params.id], (err) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json("Task deleted")

  })
}