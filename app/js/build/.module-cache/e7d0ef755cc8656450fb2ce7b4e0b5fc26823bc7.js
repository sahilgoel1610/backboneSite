var reactList = React.createClass({displayName: "reactList",
render: function () {

	return React.createElement("div", null, "HELLO");
    
	
	}
});

	
  React.render(
  	React.createElement("reactList", null),document.body);


       // {
        // 	this.props.coll.map(function(item, i) {
        //   	alert("working");
          
        //   return (
        //   	<div class=" item_name"> {item.get('name')}</div>			
        //   );
        // }, this)}