#fish = {
#    name: 'nemo',
#    health: 10,
#    speed: 2
#}

require "pry"

class Fish #starts with caps and camelCase

  #metaprogramming: writes program for you (shortcut)
  attr_accessor :name #getter&setter
  attr_reader :health #getter
  attr_writer :speed #setter

  def initialize(name) #when a fish is created this method will autorun
    puts "new fish is born!!!"
    #health = 10 #scope - local variable
    @health = 10 #instance variable (each fish has own health)
    @speed = 5
    @name = name
    @stomach = []
  end

  #f1 = Fish.new("nemo")
  #new fish is born!!!
  #=> #<Fish:0x007fa009152f88 @health=10, @name="nemo", @speed=5, @stomach=[]>

  #getter
  def get_name # abilities
    return @name #instance variable is accessible
  end

  #setter
  def set_name(new_name)
    @name = new_name
  end

  def sleep
    @health = @health + 10
  end
end

class Plant
  def initialize
    @health = 5
  end
end

binding.pry

puts "welcome to the underwater world"
