module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      development: {
        plugins: [
          [
            "module-resolver",
            {
              root: ["."],
              extensions: [
                ".ios.ts",
                ".android.ts",
                ".ts",
                ".ios.tsx",
                ".android.tsx",
                ".tsx",
                ".jsx",
                ".js",
                ".json",
              ],
              alias: {
                "@base/components": "./base/components/",
                "@base/ui": "./base/ui/",
                "@base/tw": "./base/style/",
                src: "./src/",
                icons: "./icons/",
              },
            },
          ],
        ],
      },
    },
  };
};
