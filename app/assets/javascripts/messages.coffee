# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

new_message = new Event("new_message")

App.messages = App.cable.subscriptions.create 'MessagesChannel',
  received: (data) ->
    window.messages.push(data)
    window.dispatchEvent(new_message)

  init: ->
    setTimeout =>
      @perform "follow", {topic_id: window.topic.id}
    , 100

$(document).on 'page:change', -> App.messages.init()
  
