'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseURL = 'https://www.instagram.com/';
var endpoint = '/media';

var instascrape = function instascrape(username) {
	var uri = baseURL + username + endpoint;
	return (0, _requestPromise2.default)({
		uri: uri,
		json: true
	});
};

exports.default = instascrape;