var contact= Backbone.View.extend({

tagName: 'div',
className: 'contactDiv',
template: _.template($('#name').html()),


events: {
// 'click .editContact' : 'editContact'
},

editContact: function (argument) {
	// alert("func being triggered");
},

initialize: function () {
	//alert("inside View");
	this.render();
},


render: function () {

	var html = this.template(this.model.toJSON());
	
	// var html = this.template({name: this.model.get('name')});	


	// console.log(html);

	this.$el.append(html);
	//this.$el.show();
	// console.log(this);
	return this;
	// body...
}




});