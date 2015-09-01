var MessageBox = React.createClass({displayName: "MessageBox",
  render: function() {
    return React.createElement("div", null, 'Mr. ' + this.props.name);
  }
});

React.render(React.createElement(MessageBox, {name: "Rogers"}), mountNode);


// var reactList = React.createClass({

// render : function () {
// 	return <div>HELLO</div>;
// 	}
// });

	
//   React.render(
//   	<reactList />, 
//   	document.body
//   	);


       // {
        // 	this.props.coll.map(function(item, i) {
        //   	alert("working");
          
        //   return (
        //   	<div class=" item_name"> {item.get('name')}</div>			
        //   );
        // }, this)}