#input = gets.chomp

#issue - not modular: hard to do unit testing
#inital methods has puts only instead of return (no output)
#need to group it as a whole and include methods

#example_input = "YOOO"

#example of good code: input, process and output

class Message #single responsibility
  attr_reader :text

  def initialize(text)
    @text = msg
  end

  def question?
    @text.end_with?("?")
  end

  def shouting?
    @text.upcase == @text
  end

  def silence?
    @text.strip == ""
  end
end

m1 = Message.new("hello")
m1.question?

class DanBot #single responsibility
  def chat(message) #strings?
    #question?(input)
    if message.question?
      "Sure"
    elsif message.silence?
      "fine, be that way"
      #shouting?(input)
    elsif message.shouting?
      "Whoa chill out!"
    else
      "Whateves"
    end
  end

  #   case
  #   when message.question?
  #     puts "Sure"
  #   when message.silence?
  #     puts "fine, be that way"
  #   when message.shouting?
  #     puts "Whoa chill out!"
  #   else
  #     puts  "Whateves"
  #   end
  # end

  def bye
    puts "bye"
  end
end

#   def question?(input)
#     input.end_with?("?")
#   end

#   def shouting?(input)
#     input.upcase == input #create a method called shouting will make this easier to read
#   end

#   def silence?(input)
#     input.strip == ""
#   end
# end

#dan(example_input)

#if I'm going to write tests? How am I going to use it?
require "pry"

bot = DanBot.new
bot.chat(Message.new("yo?")) # => 'fine be that way

binding.pry
puts "start chatting"
#are you telling a story?
#oop - what do you think needs to change in the future?
#low coupling - high cohesion
#primitive obsession
#feature envy

#avoid calling one method within another method
#keep it shallow
#call all of them within one method
#e.g def a
#    one
#    two
#    end
#this will be more tangible
