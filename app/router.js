var appRouter= Backbone.Router.extend({

routes: {
	'':'home',
	'contacts': 'home',
	'testurl':'dba',
	'contacts/edit/:id': 'editContact',
	'contacts/new': 'newContact',
	'contacts/delete/:id' : 'deleteContact'
	//'contact/:id': "getContact"
}

});
// var y= new directory();
    // var z= new list([collection: y]);
    // var z= new list({collection: y});

var app_router= new appRouter;

app_router.on('route:home',function () {

		
   $('.container').html(z.render().$el);

	// alert("routed to  home");
	// body...
});

app_router.on('route:deleteContact',function(id)
{
	y.remove(id);
	app_router.navigate('', true);

});
app_router.on('route:editContact',function(id){
// alert("router working");
	var editThis=y.get(id);
	 if (editThis) {
	 	console.log("contact being edited");
	 	var editForm= new createContact ({model: editThis});

	 	// $('.container').html(editForm.render().$el);

	 }

alert('edit function called for model with' + id );

});

app_router.on('route:newContact',function(){
	 	console.log("Contact being added");
	var b= new createContact({model: new appContact()});
	// $('.container').html(b.render().$el);
	

});

app_router.on('route:dba',function(){

	alert('Just a debug alert');
});

Backbone.history.start();