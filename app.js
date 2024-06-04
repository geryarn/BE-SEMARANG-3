const express = require("express");
const app = express();
const port = 3000;
const db = require("./db/index");
const Contact = db.contact;
const cors = require("cors");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Middleware for contact form input validation
function validateContact(req, res, next) {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ error: "Semua kolom harus diisi." });
  }
  next();
}

// Endpoint to store feedback (POST request)
app.post("/api/contact", validateContact, async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    // Save feedback to database using Sequelize model
    await Contact.create({ firstName, lastName, email, phone, message });
    res.status(201).json({ message: 'Message berhasil dikirim.' });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
  }
});

app.get('/proses_contact', async (req, res) => {
  try {
    const contact = await Contact.findAll();
    res.status(200).json({
      success: true,
      message: "Successful",
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unsuccessful",
      error: error.message
    });
  }
});

app.get("/", (req, res) => {
  res.send("Server Jalan!");
});

// Database Synchronization
async function startdb() {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Database connected");
  } catch (error) {
    console.log("Database not connected", error);
  }
}

startdb();

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
