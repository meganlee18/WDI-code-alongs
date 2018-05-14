require 'fileutils' # standard library

#ARGV argument vector like an array
#puts ARGV[0]

#filename = gets.chomp

# FileUtils.touch('test.txt')
# FileUtils.touch(filename)

FileUtils.touch(ARGV[0])

=begin 

type ruby.making_files.rb
type new file name: awesome file
ls

=end

