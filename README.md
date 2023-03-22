# 11ty Crash Course

Important functions for eleventy config:

```
addPassthroughCopy()
addWatchTarget()
addFilter()
addShortcode()
addCollection()
```

Important objects in eleventy config:

```
eleventyConfig
collectionApi
```

General purpose eleventy configuration:

```
module.exports = function(eleventyConfig) {
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
```
