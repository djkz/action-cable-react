class TopicsController < ApplicationController
  before_action :authenticate_user!

  def show
    @topic = Topic.find params[:id]
  end

  def create
    @topic = Topic.create topic_params
    redirect_to @topic
  end

  private

  def topic_params
    params.require(:topic).permit(:name)
  end
end
