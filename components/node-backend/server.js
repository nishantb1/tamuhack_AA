const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const pool = require('./db'); // This is your configured PostgreSQL connection

const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json

// POST endpoint for login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the user exists in the database
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (user.rows.length > 0) {
      // User exists, now we check the password
      const validPassword = await bcrypt.compare(password, user.rows[0].password_hash);
      if (validPassword) {
        res.json({ success: true, message: "Login successful" });
      } else {
        res.status(400).json({ success: false, message: "Invalid password" });
      }
    } else {
      res.status(400).json({ success: false, message: "User does not exist" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
