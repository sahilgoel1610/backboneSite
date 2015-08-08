var contact= Backbone.View.extend({

tagName: 'div',
className: 'contactDiv',
template: _.template($('#name').html()),

initialize: function () {
	//alert("inside View");
	this.render();
},


render: function () {

	var html = this.template(this.model.toJSON());
	console.log(html);

	this.$el.append(html);
	this.$el.show();
	return this;
	// body...
}




});