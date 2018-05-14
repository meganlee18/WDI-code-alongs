
require "sinatra"
require "sinatra/reloader"
require "pg"

def run_query(sql)
  conn = PG.connect(dbname: "goodfoodhunting")
  result = conn.exec(sql)
  conn.close
  return result
end

get "/" do
  conn = PG.connect(dbname: "goodfoodhunting")
  sql = "SELECT * FROM dishes;"
  @dishes = run_query(sql)
  conn.close

  erb :index
end

get "/dishes/new" do
  erb :new
end

post "/dishes" do

  #1. get the input from the form?
  #params # { name: 'cake', image_url:''}
  #return params.inspect
  #2. save it in the database - insert a new record
  sql = "INSERT INTO dishes (name, image_url) VALUES ('#{params[:name]}', '#{params[:image_url]}');"
  #insert into dishes (name, image_url) values ('cake', 'www.try.com/pic');
  #return sql = to check if it's correct first
  #conn = PG.connect(dbname: "goodfoodhunting")
  #conn.exec(sql)
  #conn.close
  #redirect to homepage
  run_query(sql)
  redirect to ("/")
end

#how to get to /dishes?id=1
#use params?
#get '/dishes/'(params[:id])'' do

get "/dishes/:id" do
  sql = "SELECT * FROM dishes WHERE id= #{params[:id]};"
  #conn = PG.connect(dbname: "goodfoodhunting")
  results = run_query(sql)
  @dish = results.first
  @comments = run_query("SELECT * FROM comments WHERE dish_id = #{params[:id]}")
  #conn.close
  #if dishes[id=1], show: erb will load pudding

  erb :show
end

delete "/dishes" do
  sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  #conn = PG.connect(dbname: "goodfoodhunting")
  run_query(sql)
  #conn.close
  redirect to ("/")
end

get "/dishes/:id/edit" do
  #grab it from the database using the id from the path
  result = run_query("SELECT * FROM dishes WHERE id = #{params[:id]};")
  @dish = result.first

  erb :edit
end

put "/dishes/:id" do
  #run an sql
  sql = "UPDATE dishes SET name = '#{params[:name]}', image_url ='#{params[:image_url]}' WHERE id = #{params[:id]};"
  #return sql
  run_query(sql)
  redirect to("/dishes/#{params[:id]}") #redirect to single dish details page
end

post "/comments" do
  #dish_id and comments
  sql = "INSERT INTO comments (content, dish_id) VALUES ('#{params[:content]}','#{params[:dish_id]}');"
  #return sql
  run_query(sql)
  redirect to("/dishes/#{params[:dish_id]}")
end
