Rails.application.routes.draw do
  get 'messages/create'

  devise_for :users

  resources :topics do
    resources :messages
  end

  root 'home#index'

end
