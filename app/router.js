var appRouter= Backbone.Router.extend({

routes: {
	'':'home',
	'testurl':'dba'
	//'contact/:id': "getContact"
}

});

var app_router= new appRouter;

app_router.on('route:home',function () {

	alert("routed to  home");
	// body...
});

app_router.on('route:dba',function(){
	alert('Just a debug alert');
});

Backbone.history.start();