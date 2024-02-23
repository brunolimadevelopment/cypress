const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  // pega os arquivos de ambientes da pasta config.
  const pathToConfigFile = path.resolve(".", "cypress/config", `${file}.json`);

  // retorna como json
  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  const file = config.env.configFile || "dev";

  return getConfigurationByFile(file);
};
