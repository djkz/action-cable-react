@App = {}
#App.cable = Cable.createConsumer 'ws://127.0.0.1:28080'
#App.cable = Cable.createConsumer 'wss://ac-react.herokuapp.com:28080'
App.cable = Cable.createConsumer 'wss://ws.pusherapp.com/app/5af8317f671fff196c2b'
