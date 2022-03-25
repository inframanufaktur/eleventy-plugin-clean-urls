# @inframanufaktur/eleventy-plugin-clean-urls

Eleventy plugin wrapper around [@inframanufaktur/clean-urls](https://github.com/inframanufaktur/clean-urls).

## What does this do?

This package adds a transform to your `eleventyConfig` which removes those pesk tracking params (such as `utm_campaign` or `fbclid`) from links in your HTML.

## How do I use this?

First, install:

```bash
npm install @inframanufaktur/eleventy-plugin-clean-urls
```

Second, add the transform to your config:

```js
const pluginCleanUrls = require("@inframanufaktur/eleventy-plugin-clean-urls");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginCleanUrls);
};
```

Want to know what gets removed? See the [full list of removed params](https://github.com/inframanufaktur/clean-urls/blob/main/data/params.js), and the associated companies.

### Configuration

This plugin is a wrapper around our `clean-urls` package. There’s currently one configuration option, which is a allow-list to allow tracking params from a specific company.

```js
const pluginCleanUrls = require("@inframanufaktur/eleventy-plugin-clean-urls");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginCleanUrls, { allowlist: ["Piwik"] });
};
```

Using this example all Piwik tracking params (`pk_campaign` and so forth) will be kept in your HTML.
