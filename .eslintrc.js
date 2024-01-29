/* eslint-disable max-len */
/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: [
    "@typescript-eslint",
    "react",
    "sort-keys-fix",
    "simple-import-sort",
    "import",
    "unused-imports",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      "babel-module": {
        root: ["./src"],
        alias: {
          "@src": "./src",
          "@components": "./src/components",
          "@utils": "./src/utils",
        },
        cwd: "babel.config.js",
        extensions: [".js", "jsx", ".ios.js", ".android.js", ".ts", ".tsx"],
      },
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", "ts", "tsx"],
      },
    },
  },
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx", ".json"],
      },
    ],
    "no-bitwise": "off",
    "react/style-prop-object": "warn",
    "no-use-before-define": ["off", { functions: false, classes: false }],
    "react/no-array-index-key": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "function-paren-newline": "off",
    "max-len": [2, { code: 120, tabWidth: 4, ignoreUrls: true }],
    "sort-keys-fix/sort-keys-fix": "warn",
    "linebreak-style": 0,
    "react/prop-types": 0,
    "no-restricted-exports": "off",
    "object-curly-newline": "off",
    "react/function-component-definition": "off",

    // Don"t explicitly add .tsx/.ts extensions
    "import/extensions": [
      2,
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    // Ensure correct ordering of imports
    "import/order": [
      2,
      {
        "newlines-between": "ignore",
        pathGroups: [
          {
            pattern: "@/**",
            group: "external",
            position: "after",
          },
        ],
      },
    ],

    // Configure simple sorting of imports
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "warn",
    "import/prefer-default-export": "off",

    "no-underscore-dangle": [
      "error",
      { allow: ["_id", "__typename", "__DEV__"] },
    ],
  },
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "airbnb-typescript",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-underscore-dangle": "off",

        // Configure unused-imports plugin for TypeScript files ONLY
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
      },
    },
    {
      files: ["*.js", "*.ts", "*.jsx", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Node.js builtins. You could also generate this regex if you use a `.js` config.
              // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
              [
                "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
              ],
              // Packages. `react` related packages come first.
              ["^react", "^@?\\w"],
              // Side effect imports.
              ["^\\u0000"],
              // Internal packages.
              [
                "^(@|~|@types|@src|@assets|@constants|@components|@hooks|@screens|@services|@reducers|@utils|@theme|@actions|@navigation)(/.*|$)",
              ],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.s?css$"],
            ],
          },
        ],
      },
    },
  ],
};
