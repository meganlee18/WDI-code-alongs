#1st test case

# def to_sentence(list)
#   if list.length == 3
#     return "#{list[0]}, #{list[1]} and #{list[2]}"
#   else list.length == 2
#     return "#{list[0]} and #{list[1]}"
#   end
# end

#Include 2nd test case

# def to_sentence(list)
#   last_elem = list.pop
#   str = list.join(", ")
#   return "#{str} and #{last_elem}"
# end

# Include 2nd and 3rd test cases
# def to_sentence(list)
#   if list.length == 1
#     return list.first
#   elsif list.length == 2
#     return list.join(" and ")
#   else
#     return list[0..-2].join(", ") + " and " + list.last
#   end
# end

#Second method: Include 2nd and 3rd test cases
def to_sentence(list)
  case list.length
  when 1
    list.first
  when 2
    list.join(" and ")
  else
    "#{list[0..-2].join(", ")} and #{list.last}"
  end
end
