const request_url = "https://app.ticketmaster.com";
const _package = "/discovery/v2/events.json?";
const _package_detail = "/discovery/v2/events/";
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

function req_producer_pagi(link_first, pageNum) {
	const regex = /page=([0-9]*)/i;
	const result = request_url + link_first + api_key;
	if (pageNum) return result.replace(regex, `page=${pageNum}`);
	return result;
}

function req_for_id(id) {
	let result = request_url + _package_detail;
	return result + id + ".json?" + api_key;
}

export { req_producer, req_producer_pagi, req_for_id };
