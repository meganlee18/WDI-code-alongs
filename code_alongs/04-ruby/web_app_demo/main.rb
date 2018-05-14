require 'sinatra'

# changes in main.rb does not require a restart of server
require 'sinatra/reloader' 

require 'pry'

get '/' do
    'welcome to the home page'
end

get '/chips' do
    orders = ['burger','chips']
    return 'hot chips' + ' with '+ orders[0]
end

get '/lucky_number' do
    "here is your lucky number: #{ rand(1..20) }"
end

# localhost:4567/multiply?num1=3&num2=5
get '/mutiply' do
    result = params[:num1].to_f * params[:num2].to_f
    "the result is #{result}"
end

get '/about' do
    @name = 'phonebusters'
    erb(:some_page)
    # "<html><body><h1>about</h1><p>about #{my name}</p></body></html>"
end

#                             |----querystring -----|
# url - localhost:4567/hello?name=codebusters&size=11
# starting from the ? is called a query string

get '/hello' do

# params is a magic global hash
    return "Hi #{params["name"]} how are you?"
end

