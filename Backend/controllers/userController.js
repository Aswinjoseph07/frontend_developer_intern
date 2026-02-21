const db = require("../config/db")

exports.getProfile = (req, res) => {

  const sql = "SELECT id,name,email FROM users WHERE id=?"

  db.query(sql, [req.user.id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json(result[0])

  })
}


exports.updateProfile = (req, res) => {

  const { name, email } = req.body

  const sql = "UPDATE users SET name=?,email=? WHERE id=?"

  db.query(sql, [name, email, req.user.id], (err) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json({ message: "Profile updated" })

  })
}