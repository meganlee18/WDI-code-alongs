stuff = %w|cake pudding muffin tart|
things = %w|great giant lovely hell|

Quote.destroy_all

10.times do
  Quote.create(content: "#{stuff.sample} #{things.sample}", author: "Voltaire")
end

#create and save this to database in one line
#Run the file (rails db:seed) every time changes are made
