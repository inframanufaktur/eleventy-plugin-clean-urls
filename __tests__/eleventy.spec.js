const test = require("ava");
const sinon = require("sinon");

const config = require("../.eleventy");

test("adds transform", (t) => {
  const eleventyConfig = {
    addTransform: sinon.fake(),
  };

  config(eleventyConfig);

  t.true(eleventyConfig.addTransform.calledWith("removeTrackingParams"));
});
