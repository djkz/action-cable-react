class HomeController < ApplicationController
  def index
    @topic = Topic.new
  end
end
