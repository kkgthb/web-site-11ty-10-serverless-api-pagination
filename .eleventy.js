const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

// Per 11ty from scratch, we have to have a module.exports definition
module.exports = (eleventyConfig) => {
  // See if this helps with things that do not refresh
  module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
  };

  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // Pass things straight through from "src" to "dist"
  eleventyConfig.addPassthroughCopy("./src/static/");

  // "Now" timestamp
  eleventyConfig.addShortcode("nowstampstring", function () {
    return new Date(Date.now()).toISOString();
  });

  // JSONify filter
  eleventyConfig.addFilter("jsonify", function (text) {
    return JSON.stringify(text);
  });

  // getObjectSpread filter
  eleventyConfig.addFilter("getObjectSpread", function (obj) {
    return { ...obj };
  });

  // Render "firstrequestrender" on first request
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "firstrequestrender",
    functionsDir: "./netlify/functions/",
  });

  // Render "firstrequestrender" on first request
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "alwaysrerender",
    functionsDir: "./netlify/functions/",
  });

  // Clarify which folder is for input and which folder is for output
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
