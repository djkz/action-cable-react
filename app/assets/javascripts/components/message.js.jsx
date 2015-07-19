var Message = React.createClass({
  propTypes: {
    user: React.PropTypes.string,
    content: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>User: {this.props.user}</div>
        <div>Content: {this.props.content}</div>
      </div>
    );
  }
});
