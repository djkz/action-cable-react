var Messages = React.createClass({

  updateState: function(e) {
    this.setState({messages: window.messages});
  },

  getInitialState: function() {
    return {messages: window.messages}
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
        <h2>{ window.topic.name }</h2>
          { listItems }
        <MessageForm topic={window.topic} />
      </div>
    );
  }

});
