var MessageForm = React.createClass({

  submitMessage: function(e) {
    e.preventDefault();
    var message = React.findDOMNode(this.refs.message).value.trim();
    React.findDOMNode(this.refs.message).value = '';

    $.ajax({
      url: this.props.topic.id+'/messages/',
      dataType: 'json',
      type: 'POST',
      data: {message: {content: message}},
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });

  },

  render: function() {
    return (
      <form className="messageForm" onSubmit={this.submitMessage}>
        <br />
        Enter your message <br />
        <input name="content" type="text" ref="message" />
        <br />
        <input type="submit" />
      </form>
    );
  }
});
