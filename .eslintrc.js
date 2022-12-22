module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/base"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "indent": [ "error", 2, {
      "SwitchCase": 1
    } ],
    "complexity": ["error", 8],
    "no-mixed-operators": [
      "error",
      {
        "groups": [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        "allowSamePrecedence": true
      }
    ],
    // "linebreak-style": [ "error", "unix" ],
    "eol-last": [ "error", "always" ],
    "quotes": [ "error", "single" ],
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false }],
    "func-style": [ "error", "declaration" ],
    "prefer-arrow-callback": [ "error", { "allowNamedFunctions": false, "allowUnboundThis": false } ],
    "no-unsafe-negation": [ "error" ],
    "no-alert": [ "warn" ],
    "object-shorthand": [ "error", "always" ],
    "no-console": [ "warn", { allow: [ "error" ] } ],
    "no-var": [ "error" ],
    "semi": [ "error", "always" ],
    "camelcase": [ "error", { "properties": "never" } ],
    "dot-notation": [ "error" ],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    "no-multiple-empty-lines": [ "error", { "max": 1 } ],
    "no-multi-spaces": [ "error" ],
    "padded-blocks": [ "error", "never" ],
    "vars-on-top": [ "error" ],
    "no-unused-expressions": [ "error" ],
    "func-call-spacing": [ "error", "never" ],
    "arrow-spacing": [ "error", { "before": true, "after": true } ],
    "arrow-body-style": [ "error", "as-needed", {"requireReturnForObjectLiteral": true} ],
    "block-spacing": [ "error", "always" ],
    "space-in-parens": [ "error", "never" ],
    "object-curly-spacing": ["error", "always"],
    "space-before-function-paren": [ "error", "never" ],
    "no-whitespace-before-property": [ "error" ],
    "array-bracket-spacing": [ "error", "never" ],
    "keyword-spacing": [ "error" ],
    "key-spacing": [ "error" ],
    "space-before-blocks": [ "error", "always" ],
    "eqeqeq": [ "error", "always" ],
    "vue/attribute-hyphenation": [ 2, "always" ],
    "vue/no-side-effects-in-computed-properties": [ "error" ],
    "vue/html-end-tags": [ "error" ],
    "vue/html-indent": [ "error", 2 ],
    "vue/v-bind-style": [ "error" ],
    "vue/no-multi-spaces": [ "error" ],
    "comma-spacing":  ["error", { "before": false, "after": true }],
    "vue/no-reserved-keys": [ "error" ],
    "vue/return-in-computed-property": [ "error" ],
    "vue/mustache-interpolation-spacing": [ 2, "always" ],
    "vue/v-on-style": [ "error" ],
    "vue/order-in-components": [2, {
      "order": [
        "mixins",
        "components",
        "props",
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "activated",
        "deactivated",
        "beforeDestroy",
        "destroyed",
        "data",
        "computed",
        "watch",
        "methods"
      ]
    }]
  }
};
