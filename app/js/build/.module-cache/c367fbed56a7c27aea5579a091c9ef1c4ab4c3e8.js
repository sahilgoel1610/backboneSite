 var CardComponent = React.createClass({displayName: "CardComponent",
        render : function() {
          return (
            React.createElement("div", {className: "card"}, 
              React.createElement("div", {className: "picture"}, 
                this.props.profile.phone
              ), 
              React.createElement("div", {className: "name"}, 
                this.props.profile.name, 
                React.createElement("small", null, 
                  "(", this.props.profile.get("email"), ")"
                )
              )
            )
          );
        }
      });
  
    