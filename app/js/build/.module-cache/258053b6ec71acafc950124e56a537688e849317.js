

var ReactList = React.createClass({displayName: "ReactList",

	render: function () {
		return( React.createElement("div", null, " hey")
		// this.props.coll.map(function(appContact,it){
		// 		return <div>{'Mr.'+ appContact.name}</div>;
		// 	},this)
		);
	}
});	
React.render(React.createElement(ReactList, {coll: y}), document.getElementById('contactDiv'));

