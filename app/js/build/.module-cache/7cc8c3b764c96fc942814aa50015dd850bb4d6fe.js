// var MessageBox = React.createClass({
//   render: function() {
//     return <div>{'Mr. ' + this.props.name}</div>;
//   }
// });

// React.render(<MessageBox name="Rogers"/>, document.getElementById('contactDiv'));


var ReactList = React.createClass({displayName: "ReactList",

	render: function () {
		this.props.coll.map()
		return React.createElement("div", null, 'Mr.'+ this.props.coll[1].name);
	}
});	
React.render(React.createElement(ReactList, {coll: k}), document.getElementById('contactDiv'));


       // {
        // 	this.props.coll.map(function(item, i) {
        //   	alert("working");
          
        //   return (
        //   	<div class=" item_name"> {item.get('name')}</div>			
        //   );
        // }, this)}