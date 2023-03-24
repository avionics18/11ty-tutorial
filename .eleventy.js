const inspect = require("util").inspect;
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addWatchTarget("src/assets/css/");

	eleventyConfig.addFilter("postDate", function(dateObj) {
	  return DateTime.fromJSDate(dateObj).toFormat("MMMM dd, yyyy");
	});
	eleventyConfig.addFilter("debug", function(content) {
		return inspect(content);
	});

	// eleventyConfig.addShortcode("Card", function() { return });

	eleventyConfig.addCollection('posts', function(collectionApi) {
		return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
	});

	return {
		dir: {
			input: 'src',
			includes: '_includes',
			output: '_site',
		},
		templateFormats: ['md', 'njk', 'html'],
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk'
	}
}