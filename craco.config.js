const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@components": path.resolve(__dirname, "src/components"),
      "@ui": path.resolve(__dirname, "src/ui"),
    },
  },
};
