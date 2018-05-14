require "active_record"

# database settings

options = {
  adapter: "postgresql",
  database: "goodfoodhunting",
}

ActiveRecord::Base.establish_connection(options)

ActiveRecord::Base.logger = Logger.new(STDOUT) #print out sql commands for you

# mapping class to tables
# mapping singular dish class to plural dishes table

class Dish < ActiveRecord::Base
  has_many :comments # plural
end

class Comment < ActiveRecord::Base
  belongs_to :dish # singular
end

require "pry"

binding.pry

puts "here comes the magic!!!"
