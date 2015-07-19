var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Messages = React.createClass({

  getInitialState: function() {

    var _this = this;

    App.messages = App.cable.subscriptions.create('MessagesChannel', {
      received: function(data) {
        var messages = _this.state.messages;
        messages.push(data);
        _this.setState({messages: messages});
      }
    });
    return {messages: window.messages}

  },
  
  componentWillMount: function() {

    setTimeout( function(){
      App.messages.perform( "follow", {topic_id: window.topic.id} );
    },
    500);
  },

  render: function() {
    var listItems = this.state.messages.map(function(message){
      return <Message key={message.id} user={message.user} content={message.content} />;
    });

    return (
      <div>
        <h2>{ window.topic.name }</h2>
        <ReactCSSTransitionGroup transitionName="message">
          { listItems }
        </ReactCSSTransitionGroup>
        <MessageForm topic={window.topic} />
      </div>
    );
  }

});
