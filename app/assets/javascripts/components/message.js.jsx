var Message = React.createClass({
  propTypes: {
    user: React.PropTypes.string,
    content: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="message">
        <Gravatar email={this.props.user} />
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
});
