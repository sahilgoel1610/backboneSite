 var CardComponent = React.createClass({
        render : function() {
          // var id = "#contacts/edit/" + {this.props.profile.id} ;
          return (

            <div className="contact">
             <a href={"#contacts/edit/"+this.props.profile.id} className="editContact">Edit</a> 
              <div className="picture">
                {this.props.profile.phone} 
              </div>
              <div className="name">
                {this.props.profile.name}
              </div>
              <div>
                  ({this.props.profile.email})
              </div>
            </div>
          );
        }
      });
  
    