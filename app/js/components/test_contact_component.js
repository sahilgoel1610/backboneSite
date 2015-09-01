   var profile = new appContact({
        name    : "Christopher Pitt",
        email  : "male",
        phone : "http://placekitten.com/200/200"
      });

var CardComponent = React.createClass({
        render : function() {
          return (
            <div className="card">
              <div className="picture">
                <img src={this.props.profile.get("phone")} />
              </div>
              <div className="name">
                {this.props.profile.get("name")}
                <small>
                  ({this.props.profile.get("email")})
                </small>
              </div>
            </div>
          );
        }
      });
  
      React.render(
        <CardComponent profile={profile} />,
        document.body
      );