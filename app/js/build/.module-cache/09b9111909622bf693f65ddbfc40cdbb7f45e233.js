console.log("reached here");

var reactList = React.createClass({displayName: "reactList",

render: function () {
	var argument = this.props.y[0];
	console.log("hey");
	return React.createElement(CardComponent, {profile: argument}) ;
	
	}
});

  React.render(
  	    React.createElement("reactList", {coll: y}),
        document.body
      );