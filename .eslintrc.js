module.exports = {
  // ... outras configurações do ESLint
  rules: {
    semi: "on", // Desativa a regra de ponto e vírgula
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
  },
  extends: ["plugin:cypress/recommended"],
  plugins: ["cypress"],
};
