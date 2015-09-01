	

var ReactList = React.createClass({displayName: "ReactList",

	render: function () {
		return ( React.createElement("div", null, 
		
			this.props.coll.map(function(appContact){
				return React.createElement(CardComponent, {profile: appContact})
				// return <div>{'Mr.'+ appContact.name}</div>;
			})
			)
		);
	}
});	
React.render(React.createElement(ReactList, {coll: k}), document.getElementById('contactDiv'));

