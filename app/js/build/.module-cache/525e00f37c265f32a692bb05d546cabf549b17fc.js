var reactList = React.createClass({displayName: "reactList",
render: function () {

	return (
      React.createElement("div", null, 
        this.props.coll.map(function(item, i) {
          	alert("working");
          
          return (
          	React.createElement("div", {class: " item name"}, " ", item.get('name'))			
          );
        }, this)
      )
    );
	
	}
});

	
  React.render(
  	    React.createElement("reactList", {coll: k}),
        document.body
      );