 var CardComponent = React.createClass({displayName: "CardComponent",
        render : function() {
          return (
            React.createElement("div", {className: "card"}, 
              React.createElement("div", {className: "picture"}, 
                React.createElement("img", {src: this.props.profile.get("phone")})
              ), 
              React.createElement("div", {className: "name"}, 
                this.props.profile.get("name"), 
                React.createElement("small", null, 
                  "(", this.props.profile.get("email"), ")"
                )
              )
            )
          );
        }
      });
  
      React.render(
        React.createElement(CardComponent, {profile: profile}),
        document.body
      );