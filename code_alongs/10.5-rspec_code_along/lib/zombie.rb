class Zombie

  #getters and setters - calling it here so you don't have to write again
  attr_reader :name, :brains_eaten, :hungry

  #default parameters
  def initialize(name = "Fred", brains_eaten = 0, hungry = true)
    @name = name
    @brains_eaten = brains_eaten
    @hungry = hungry
  end

  def hungry?
    @hungry
  end

  def eat
    @brains_eaten += 1
  end
end
