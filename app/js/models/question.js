var appContact= Backbone.Model.extend({

defaults: {
	'name': 'NA',
	'email': 'NA@com',
	'phone': null
},


// validate: function(attrs) {
// 	var errors[];


// 	if(!attrs.email){
// 		errors.push({name: 'email', message: 'Please fill email field.'});
// 	}

// 	return errors.length > 0 ? errors : false;

// },

initialize: function () {
	
	this.set('phone',00000);
	// body...
},

validate: function(attr){

if (!attr.email) { return 'PLease fill a valid email ID'};
if (!attr.name) { return 'PLease fill in a valid name'};

}


});