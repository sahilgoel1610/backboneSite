
var ReactList = React.createClass({

	render: function () {
		return ( <div> 
		{
			this.props.coll.map(function(appContact){
				return <CardComponent profile = {appContact}/>
				// return <div>{'Mr.'+ appContact.name}</div>;
			})}
			</div>
		);
	}
});	
React.render(<ReactList coll={k}/>, document.getElementById('contactDiv'));

