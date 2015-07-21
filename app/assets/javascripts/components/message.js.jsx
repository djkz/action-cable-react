var Message = React.createClass({
  propTypes: {
    user: React.PropTypes.string,
    content: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="message">
        <div className="author">{this.props.user}</div>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
});
