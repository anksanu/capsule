
// Capsule Constructor
capsule = function(){
	var _storage
	,	self = this;


	// Looks for the availability of global localStorage object in the browser
	_storage = (function(){
		try {
			localStorage.setItem('foo', 'bar');
			localStorage.getItem('foo');
			localStorage.removeItem('foo');
			return localStorage;
		} catch(e) {
			console.error('LocalStorage global Object not present');
		}
		return void 0;
	})();

	self._storage = _storage;

	return _storage ? self : void 0;
};

capsule.prototype = {};


// Capsule wrapper over localStorage native setItem method
capsule.prototype.setItem = function(id, Obj) {
	var self = this;

	self._storage.setItem(id, Obj);

	return Obj;
};

// Capsule wrapper over localStorage native getItem method
capsule.prototype.getItem = function(id) {
	var self = this;

	return self._storage.getItem(id);
};

// Capsule wrapper over localStorage native removeItem method
capsule.prototype.removeItem = function(id) {
	var self = this
	,	dataObj = void 0;

	dataObj = self._storage.getItem(id);
	self._storage.removeItem(id);

	return dataObj;
}

// Global capsule object
capsule = new capsule();