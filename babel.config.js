module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils",
            "@context": "./src/context",
            "@navigation": "./src/navigation",
          },
        },
      ],
    ],
  };
};
