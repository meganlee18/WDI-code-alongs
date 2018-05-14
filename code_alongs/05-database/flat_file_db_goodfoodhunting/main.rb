     
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  #return file contents here - IO.readlines
  @lines = IO.readlines('dishes.txt')
  erb :index
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  # save it somewhere permanent - say a file called dishes.txt
  File.open('dishes.txt', 'a+') do |file|
    file.puts params[:name]
  end
  #redirect user to somewhere with get request "safe operation"
  #get post redirect

  redirect to ('/')
end






