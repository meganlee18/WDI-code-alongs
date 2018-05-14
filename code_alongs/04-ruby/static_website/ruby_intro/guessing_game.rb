require 'pry'

# loops - while loop
# while some_condition
#
# end

# how to get input from user

secret = 13

puts ('welcome to the guessing game')
print ('guess a number: ')
#asking for input
guess = gets.chomp.to_i 

# your while loop here
# exit loop if guess equals secret

while guess != secret
    print 'wrong guess, guess again!'
    #holding on to the prompt/input
    guess = gets.chomp.to_i 
end

puts 'you win'


#option 2

loop do
# while true
    print 'guess a number: '
    #holding on to the prompt/input
    guess = gets.chomp.to_i
    if guess == secret
     break
    endls
end

puts 'you win'




#counter = 13

#while counter > 0 
#    puts ('Sorry... guess again')

#    counter = counter - 1

#end

#binding.pry #debugger

#puts 'You win!'
