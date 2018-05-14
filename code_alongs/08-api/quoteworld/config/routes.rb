Rails.application.routes.draw do
  resources :quotes

  get "/api/quotes/first3", "api/quotes#first3"

  #get '/api/quotes', to: 'api_quotes#index'
  namespace :api do
    resources :quotes
  end

  #get "/api/quotes?q=", "api/quotes#show"
end
