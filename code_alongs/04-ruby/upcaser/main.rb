require 'sinatra'
require 'sinatra/reloader'

#server remembers data if computer closes
#but this may not be a great solution in the long term
$emails = ['coke@pudding.com','flying@friends.com','cooking@time.co']

get '/' do
    erb :home
end

get '/admin' do
    @emails = $emails
    erb :admin
end

get '/process' do
    #return params[:email]
    $emails.push(params[:email])
end