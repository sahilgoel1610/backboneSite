// var MessageBox = React.createClass({
//   render: function() {
//     return <div>{'Mr. ' + this.props.name}</div>;
//   }
// });

// React.render(<MessageBox name="Rogers"/>, document.getElementById('contactDiv'));


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


       // {
        // 	this.props.coll.map(function(item, i) {
        //   	alert("working");
          
        //   return (
        //   	<div class=" item_name"> {item.get('name')}</div>			
        //   );
        // }, this)}