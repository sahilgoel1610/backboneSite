var directory = Backbone.Collection.extend({
	model: appContact,

	 localStorage: new Backbone.LocalStorage('contactStorage'),

}) ;