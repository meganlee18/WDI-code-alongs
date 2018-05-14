
# $ ruby sum.rb 2 3
# $ output 5
# ARGV = ['2','3']
# think of it as an array

# 1.while loop
# 2.[].each
# 3.other built in array methods


# 1 - Array Method
puts ARGV[0].to_i + ARGV[1].to_i




=begin 

# 2 - While loop method

total = 0

index = 0
while index < ARGV.length 
    puts ARGV[index]
    total += ARGV[index].to_i
    index += 1
end

puts total

=end

# 3 - .each Method 
require 'pry'


total = 0

ARGV.each do |elem|
    puts elem
    total += elem.to_i
    binding.pry
end

puts total