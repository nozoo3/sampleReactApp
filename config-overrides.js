// https://chaika.hatenablog.com/entry/2021/07/22/083000
const path = require('path');

module.exports = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      // エイリアスにするパスをココに書く
      '@': path.resolve(__dirname, './src/'),
    },
  };

  return config;
};
