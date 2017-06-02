import rp from 'request-promise';

const baseURL = 'https://www.instagram.com/';
const endpoint = '/media';

const instascrape = (username) => {
	const uri = baseURL + username + endpoint;
	return rp({
		uri:uri, 
		json: true
	});
}

export default instascrape;
