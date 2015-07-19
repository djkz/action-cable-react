class Message < ActiveRecord::Base
  belongs_to :topic
  belongs_to :user

  validates :content, presence: true

  def as_json(options={})
    super(:only => [:id, :content]).merge(user: user.email)
  end
end
