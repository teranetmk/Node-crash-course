const url = require('url');

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());
// host (root domain)
console.log(myUrl.host);
// Hostname (does not get port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized query(prams)
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
