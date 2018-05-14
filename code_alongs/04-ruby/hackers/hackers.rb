require 'fileUtils'

=begin

hackers 
    |
    |--mary poppins
        |--README.md
    |--jo
        |--README.md
    |--lisa
        |--README.md

=end

# you will need methods from FileUtils
# which method to make a directory? mkdir
# which method to create a file? touch
# which method to convert string to lowercase? 'Hello'.downcase
# you may also need to change directory with FileUtil.cd ()

hackers = ['Mary Poppins', 'Jo Black', 'Lisa Simple']

hackers.each do |hacker|
    puts hacker

    # create lowercase folder in hacker
    FileUtils.mkdir(hacker.downcase)
    FileUtils.cd(hacker) do
    # Create file
    FileUtils.touch('README.md')
    # FileUtils.touch("#{hacker}/README.md")  -> also works
    # Change directory 
    FileUtils.cd('../')
    end
end