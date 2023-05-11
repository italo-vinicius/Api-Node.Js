const express = require("express");
const UserModel = require("../src/models/User.model");

const app = express();
app.use(express.json());

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>vai karalhooodoo</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Itinho delas",
      email: "italo@delas.com",
    },
    {
      name: "John doei",
      email: "Jake@delas.com",
    },
  ];
  res.status(200).json(users);
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8000;

app.listen(port, console.log("rodando fino"));
