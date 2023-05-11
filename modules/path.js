const path = require("path");

//Nome do arquivo
console.log(path.basename(__filename));

//Nome do diretório
console.log(path.basename(__dirname));

//Nome da extensão do arquivo
console.log(path.extname(__filename));

//Cria o objeto do path
console.log(path.parse(__filename));

// Junta caminhos de arquivos
console.log(path.join(__dirname, "vaikrl"));
