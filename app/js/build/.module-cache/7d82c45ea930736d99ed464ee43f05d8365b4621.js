 var CardComponent = React.createClass({displayName: "CardComponent",
        render : function() {
          var id_link
          return (

            React.createElement("div", {className: "contact"}, 
             React.createElement("a", {href: "#contacts/edit/'{this.props.profile.id}'", class: "editContact"}, "Edit"), 
              React.createElement("div", {className: "picture"}, 
                this.props.profile.phone
              ), 
              React.createElement("div", {className: "name"}, 
                this.props.profile.name
              ), 
              React.createElement("div", null, 
                  "(", this.props.profile.email, ")"
              )
            )
          );
        }
      });
  
    