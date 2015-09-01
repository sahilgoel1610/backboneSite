var reactList = React.createClass({displayName: "reactList",
render: function () {
	var argument = this.props.coll[1];
	console.log(coll);
	return (
      React.createElement("div", null, 
        this.props.coll.map(function(item, i) {
          return (
          	React.createElement("div", null, " ", item.get('name'))			
          );
        }, this)
      )
    );
	
	}
});

	alert("working");
  React.render(
  	    React.createElement("reactList", {coll: k}),
        document.body
      );