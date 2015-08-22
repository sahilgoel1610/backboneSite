var list= Backbone.View.extend({



template: _.template($('#contacts_list').html()),
className: '.Subcontainer',

events: {
	'click .add_contact_but' : 'refresh'
},

refresh: function (argument) {
app_router.navigate('', true);
	// body...
},

initialize: function  (argument) {
	// alert("list view init");
	// body...
},


renderOne: function (contact_model) {

	var single_contact= new contact({model: contact_model });
	this.$(".contacts-container").append(single_contact.$el);

	// body...
},



render: function () {
var html=this.template();
// alert("render one called");
this.$el.html(html);
// console.log(this);
this.collection.each(this.renderOne, this);

return this;
	// body...
}


});