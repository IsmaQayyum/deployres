const optimizedImages = require('next-optimized-images');

module.exports = optimizedImages({
  images: {
    disableStaticImages: true,
    domains: ['images.unsplash.com'],
  }
});
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.snapshot = {
      managedPaths: [],
    };
    return config;
  },
};
