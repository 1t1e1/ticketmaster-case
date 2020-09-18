const request_url = "https://app.ticketmaster.com/";
const _package = "discovery/v2/events.json?";
const country = "countryCode=US";
const api_key = "&apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0";
const page_param = "&page=";
const keyword_param = "&keyword=";

function req_producer(keyword, pageNum) {
	let result = request_url + _package + country;
	if (keyword) result += keyword_param + keyword;
	result += api_key;
	if (pageNum) result += page_param + pageNum;
	return result;
}

export { req_producer };
