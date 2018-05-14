
#racecar

# testing framework
def test(expected, actual)
  if expected == actual
    puts "yay!"
  else
    puts "nay..."
  end
end

def add_one(num)
  return num + 1
end

test(6, add_one(5))
test(11, add_one(10))
test(0, add_one(-1))

# if "racecar" == "racecar".reverse
#   puts "it's a palindrome"
# end

def palindrome(str)
  str = str.gsub("!", "")
  str == str.reverse
end

test(true, palindrome("racecar"))
test(true, palindrome("racecar!"))
test(false, palindrome("goats"))
test(true, palindrome("atoyota"))

# if palindrome("racecar") == true
#   puts "it's pretty good"
# else
#   puts "it's no good"
# end

# if palindrome("atoyota") == true
#   puts "it's also pretty good"
# end

# Sinatra app - main.rb

@languages = ["ruby", "js", "css"]

# Views - show.erb
<%= @languages %>
ruby, js and css