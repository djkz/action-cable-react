class MessagesChannel < ApplicationCable::Channel
  def follow(data)
    stop_all_streams
    stream_from "topics:#{data['topic_id'].to_i}:messages"
  end

  def subscribed
    stop_all_streams
  end
end
