class MessagesController < ApplicationController
  def create
    @topic = Topic.find params[:topic_id]
    @message = @topic.messages.create message_params if @topic

    if @message && @message.valid?
      ActionCable.server.broadcast "topics:#{@topic.id}:messages",
        id: @message.id,
        content: @message.content,
        user: current_user.email
    end
    head :ok
  end

  def message_params
    params.require(:message).permit(:content).merge(user_id: current_user.id)
  end
end
