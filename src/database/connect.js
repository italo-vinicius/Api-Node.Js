const mongoose = require("mongoose");

const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const dbname = process.env.DATABASE_NAME;

const connectToDatabase = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${username}:${password}@learningnode.1jevygv.mongodb.net/${dbname}?retryWrites=true&w=majority`
      );
      console.log("Conexão bem-sucedida com o banco de dados");
    } catch (error) {
      console.log("Erro ao conectar ao banco de dados:", error);
    }
  };

module.exports = connectToDatabase;
