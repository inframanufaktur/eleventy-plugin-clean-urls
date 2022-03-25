const pkg = require("./package.json");
const removeTrackingParams = require("@inframanufaktur/clean-urls");
const { parseHTML } = require("linkedom");

const defaultOptions = {
  allowlist: [],
};

module.exports = function (eleventyConfig, userOptions) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch (e) {
    console.log(
      `WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${e.message}`
    );
  }

  const { allowlist } = {
    ...defaultOptions,
    ...userOptions,
  };

  eleventyConfig.addTransform("removeTrackingParams", function (content) {
    if (this.outputPath && this.outputPath.endsWith(".html")) {
      let { document } = parseHTML(content);

      const externalLinks = document.querySelectorAll('a[href^="http"]');

      for (const link of externalLinks) {
        const { href } = link;

        link.href = removeTrackingParams(href, allowlist);
      }

      return `<!DOCTYPE html>${document.documentElement.outerHTML}`;
    }

    return content;
  });
};
