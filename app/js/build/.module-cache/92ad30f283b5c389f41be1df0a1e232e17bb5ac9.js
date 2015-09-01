	

var ReactList = React.createClass({displayName: "ReactList",

	render: function () {
		return ( React.createElement("div", null, 
		
			this.props.coll.map(function(appContact){
				return CardComponent
				return React.createElement("div", null, 'Mr.'+ appContact.name);
			}), 
			"hey")
		);
	}
});	
React.render(React.createElement(ReactList, {coll: k}), document.getElementById('contactDiv'));

