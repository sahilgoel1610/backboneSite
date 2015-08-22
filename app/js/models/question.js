var appContact= Backbone.Model.extend({

defaults: {
	'name': 'NA',
	'email': 'NA@com',
	'phone': null
},


validation: {
	'email': {
		required: true,
		pattern: 'email',
		msg: 'PLease enter a valid emailID'
	}
},

initialize: function () {
	
	this.set('phone',00000);
	// body...
},

validate: function(attr){

if (!attr.email) { return 'PLease fill a valid email ID'};
if (!attr.name) { return 'PLease fill in a valid name'};

}


});