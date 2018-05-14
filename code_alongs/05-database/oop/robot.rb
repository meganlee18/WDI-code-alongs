
#class Factory
#  def initialize
#    @cars = []
#  end

#  def build_car
#    @cars.push(car.new)
#  end

#  def add_car
#    @cars.push(car)
#  end
#end

#f1 = Factory.new
#c1 = Car.new
#f1.add_car(c1)

#every method with class would be called instance methods
class Robot

  #class variable
  @@robot_count = 0

  def initialize
    @@robot_count += 1
    @name = "#{prefix}#{suffix}"
  end

  #instance method
  def name
    #Alternatively,"#{prefix}#{suffix}"
    @name
  end

  #to_a -> converting from string to array as sample can only be called from array
  #("aa".."zz") -> making a range
  def prefix
    ("aa".."zz").to_a.sample(2).to_s
  end

  def suffix
    ("000".."999").to_a.sample(3).to_s
  end

  #instance method
  def reset
  end

  #class method (self)
  def self.info
    "I am the robot God"
  end
end

r1 = Robot.new
r1.name

Robot.info
