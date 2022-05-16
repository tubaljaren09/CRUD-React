const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "crudreact",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// READ API
app.get("/api/read", (req, res) => {
  db.query("SELECT * FROM contact", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// CREATE API
app.post("/api/create", (req, res) => {
  const { name, email, contact } = req.body;
  db.query(
    `INSERT INTO contact(name, email, contact) VALUES ('${name}', '${email}', '${contact}')`,
    (err, results) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

// DELETE API
app.delete("/api/delete/:id", (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM contact WHERE id = '${id}'`, (err, results) => {
    if (err) {
      console.log(err);
    }
  });
});

// UPDATE API
app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  db.query(`SELECT * FROM contact WHERE id = '${id}'`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;
  db.query(
    `UPDATE contact SET name = '${name}', email = '${email}', contact = '${contact}' WHERE id = '${id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/", (req, res) => {
  // const queryInsert =
  //   "INSERT INTO contact(name, email, contact) VALUES ('Jaren', 'jaren@gmail.com', '09398472831')";
  // db.query(queryInsert, (err, result) => {
  //   console.log("Error", err);
  //   console.log("Result", result);
  //   res.send("Hello World");
  // });
});

const port = 3000;

app.listen(port, () => {
  console.log("Listening to port: ", port);
});
