module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "linebreak-style": ["error", "unix"],
    "no-unused-vars": ["error", { "args": "after-used" }],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "yoda": ["error", "always", {"onlyEquality": true}]
  }
};
