
// Looks for the availability of global localStorage object in the browser

capsule = (function(){
	try {
		localStorage.setItem('foo', 'foo');
		localStorage.removeItem('foo');
		return localStorage;
	} catch(e) {
		console.error('LocalStorage global Object not present');
	}
	return void 0;
})();

