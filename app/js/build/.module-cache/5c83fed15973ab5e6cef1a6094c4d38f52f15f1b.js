// var MessageBox = React.createClass({
//   render: function() {
//     return <div>{'Mr. ' + this.props.name}</div>;
//   }
// });

// React.render(<MessageBox name="Rogers"/>, document.getElementById('contactDiv'));


var ReactList = React.createClass({displayName: "ReactList",

	render: function () {
		this.props.coll.map(function(appContact,it){
				alert("working");
				console.log(appContact);
				return React.createElement("div", null, 'Mr.'+ appContact.coll);
			},this)
		
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