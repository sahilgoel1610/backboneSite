var reactList = React.createClass({displayName: "reactList",

callOne: function (){

},




render: function (argument) {
	
	React.createElement(CardComponent, {profile: argument})
	
	}
});

  React.render(
        React.createElement("reactList", {coll: y}),
        document.body
      );