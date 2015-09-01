// var MessageBox = React.createClass({
//   render: function() {
//     return <div>{'Mr. ' + this.props.name}</div>;
//   }
// });

// React.render(<MessageBox name="Rogers"/>, document.getElementById('contactDiv'));


var ReactList = React.createClass({displayName: "ReactList",

	render: function () {
		return React.createElement("div", null, 'Mr.'+ this.props.ass);
	}
});	
React.render(React.createElement(ReactList, {ass: "hole"}), document.getElementById('contactDiv'));


       // {
        // 	this.props.coll.map(function(item, i) {
        //   	alert("working");
          
        //   return (
        //   	<div class=" item_name"> {item.get('name')}</div>			
        //   );
        // }, this)}