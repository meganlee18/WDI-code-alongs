require "sinatra"
require "sinatra/reloader"
require "stock_quote"
require "pry"

get '/' do
    erb :index
end

# http://localhost:4567/stock_info?stock_symbol=msft
get "/stock_info" do

    if params[:stock_symbol] == ''
    redirect to('/') #make request to '/'
    end

    #convert string - show what is sent to the server
    #params.inspect
    #params[:stock_symbol] #msft
    stock_info = StockQuote::Stock.quote(params[:stock_symbol])
    @price = stock_info.latest_price
    #passing in price from stock_info.erb 
    #@price =
    erb :stock_info
end


get "/about" do
  "about me"
end

get "/donate" do
  "thanks"
end
