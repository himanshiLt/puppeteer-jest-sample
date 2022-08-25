const caps = {
	browserName    : 'Chrome',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Jest',
		name       : 'Puppeteer-jest test on Chrome',
		resolution : '1366x768',
		user       : "himanshigupta",
		accessKey  : "1k0VSaADdimXusNeYBdfhzeztYoLMkDi0jN8Jn7PJTxZGJXKBE",
		network    : true,
		visual	   : true,
		console    : true
	}
};

module.exports = {
	connect : {
		browserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(
			JSON.stringify(caps)
		)}`
	}
};