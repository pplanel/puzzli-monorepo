const { override } = require("customize-cra");
const { aliasDangerous } = require("react-app-rewire-alias/lib/aliasDangerous");

const aliasMap = {
  "web-components-react": "../web-components-react",
};

module.exports = override(aliasDangerous(aliasMap));
