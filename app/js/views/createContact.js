var createContact = Backbone.View.extend({

template: _.template($("#new-contact-form").html()),


events: {
	'submit .contract-form': 'onSubmitForm'
},

onSubmitForm: function (argument) {
			if (this.model.isNew()) 
			{
	 			var attr= {
	 									id: y.length + 1,
      							name: this.$('.contact-name-input').val(),
							      phone: this.$('.contact-tel-input').val(),
							      email: this.$('.contact-email-input').val()
							    };
					this.model.set(attr);

					y.push(this.model);		    
			}
			
			else
			{
				var attr ={
										// id : this.model.id,
      							name: this.$('.contact-name-input').val(),
							      phone: this.$('.contact-tel-input').val(),
							      email: this.$('.contact-email-input').val()
				};
				// console.log
				// if(this.model.isValid())
				// {
					this.model.set(attr);
					this.model.save();
			 }


	 this.saveForm();

	// body...
},

saveForm: function () {
	// alert("Reached here");
	
	app_router.navigate('', true);
	
	// body...
},

initialize: function  () {
	
$('.container').html(this.render().$el);
	
},
render: function  () {

	// alert("new contact form");
	html=this.template(this.model.toJSON());
	this.$el.html(html);
	return this;
	// body...
}
});