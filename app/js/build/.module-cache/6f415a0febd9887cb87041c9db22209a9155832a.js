var reactList = React.createClass({displayName: "reactList",
render: function () {
	return (
      React.createElement("div", null, 
        this.props.coll.map(function(item, i) {
    
          	React.render(
  	    			React.createElement(CardComponent, {profile: item}),
        				 document.getElementById('contactDiv')
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