@App = {}
#App.cable = Cable.createConsumer 'ws://127.0.0.1:28080'
App.cable = Cable.createConsumer 'wss://ac-react.herokuapp.com:28080'
