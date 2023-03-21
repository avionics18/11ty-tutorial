const Nunjucks = require('nunjucks');

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addWatchTarget("src/assets/css/");

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