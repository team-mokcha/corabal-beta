module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@pages": "./src/pages",
            "@Components": "./src/components",
            "@utils": "./src/utils",
            "@contexts": "./src/contexts",
            "@config": "./src/config",
            "@assets": "./assets",
            "@stores": "./src/stores",
            "@services": "./services"
          }
        }
      ]
    ]
  };
};
