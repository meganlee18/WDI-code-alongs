=begin
    
Write a small archiving program that stores students along with the grade that they are 
in.

school = School.new("Haleakala Hippy School")
If no students have been added, the db should be empty:

school.db
# => {}
When you add a student, they get added to the correct grade.

school.add("James", 2)
school.db
# => {2 => ["James"]}
You can, of course, add several students to the same grade, and students to different 
grades.

school.add("Phil", 2)
school.add("Jennifer", 3)
school.add("Little Billy", 1)
school.db
# => {2 => ["James", "Blair"], 3 => ["Jennifer"], 1 => ["Little Billy"]}
Also, you can ask for all the students in a single grade:

school.grade(2)
# => ["James", "Blair"]
    
=end

require 'pry'

class School
    def initialize(name)
    puts "new school is created!"
    @name = name
    @db = {}
    @grade = []
    end
    #school = School.new("Haleakala Hippy School")

    def db
    @db
    end

    def add (name, grade)
    puts "new student is created"

    # 1. @db[grade] = Array(@db[grade]).push(name)
    # 2. @db[grade] ||= []
    #    @db[grade] << name 

        if @db[grade]
        #add to it
        @db[grade] << [name]
        else
        #make a new array and add name to it
        @db[grade] = [name]
        end
    end

    def grade (grade)
    #only wants the values of the db (hash)
        @db[grade]
    end

binding.pry
    
end