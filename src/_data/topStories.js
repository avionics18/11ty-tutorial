require('dotenv').config();
const EleventyFetch = require('@11ty/eleventy-fetch');

async function getTopStories() {
	const template = 'CURRENCY';
	const id = 'usdjpy';
	
	const url = `https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list?template=${template}&id=${id}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': `${process.env.API_KEY}`,
			'X-RapidAPI-Host': `${process.env.API_HOST}`
		}
	};

	// Fetch The Data
	const stories = EleventyFetch(url, {
		duration: '1d',
		type: 'json',
		fetchOptions: options,
	});

	return stories;
}

module.exports = getTopStories;