Rails.application.routes.draw do
  resources :sales
  get "/sales/new", to: "sales#new"
  #sales_controller new method sales/new.html.erb
  post "/sales", to: "sales#create"
  get "/sales/:id", to: "sales#show"

  delete "/sales/:id", to: "sales#destroy"
  get "/sales/:id/edit", to: "sales#edit"
  put "/sales/:id", to: "sales#update"
  get "sales", to: "sales#index"

  #bcrypt,update user model
  get "/login", to: "session#new"
  #session_controller, new method, session/new.html.erb, returns login form
  post "/session", to: "session#create"
  #create session, store user id, session_controller create method probably redirect
  delete "/session", to: "session#destroy"
  #destroy session, set to nil
  #session_controller destroy method also redirect

  get "/about", to: "pages#about_us"
  #pages_controller about us method pages/about_us.html.erb

  get "/", to: "pages#home"
  #pages_controller home method pages/home/html.erb
end
