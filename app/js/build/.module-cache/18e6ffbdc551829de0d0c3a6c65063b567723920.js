var MessageBox = React.createClass({displayName: "MessageBox",
  render: function() {
    return React.createElement("div", null, 'Mr. ' + this.props.name);
  }
});

React.render(React.createElement(MessageBox, {name: "Rogers"}), document.getElementById('contactDiv'));


// var reactList = React.createClass({

// render: function () {
// 	return <div>{'Mr.'+ this.props.ass}</div>;
// 	}
// });

	
// React.render(<reactList ass="hole"/>, document.getElementById('contactDiv'));


       // {
        // 	this.props.coll.map(function(item, i) {
        //   	alert("working");
          
        //   return (
        //   	<div class=" item_name"> {item.get('name')}</div>			
        //   );
        // }, this)}