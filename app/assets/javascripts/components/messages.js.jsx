var Messages = React.createClass({

  updateState: function(e) {
    this.setState({messages: document.body.messages});
  },

  getInitialState: function() {
    return {messages: document.body.messages, topic: document.body.topic }
  },
  
  componentWillMount: function() {
    window.addEventListener("new_message", this.updateState );
  },

  componentWillUnmount: function() {
    window.removeEventListener("new_message", this.updateState );
  },

  render: function() {
    var listItems = this.state.messages.slice(-5).map(function(message){
      return <Message key={message.id} user={message.user} content={message.content} />;
    });

    return (
      <div>
        <h2>{this.state.topic.name}</h2>
          { listItems }
        <MessageForm topic={this.state.topic} />
      </div>
    );
  }

});
