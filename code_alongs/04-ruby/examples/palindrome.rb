# examples
# racecar

# define method - ? means method should return boolean


def palindrome?(str)
    if str == str.reverse
    return true
else
    return false
    end
end

puts palindrome? 'examples'
puts palindrome? 'racecar'
puts palindrome? 'sayas'