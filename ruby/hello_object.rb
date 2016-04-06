#!/usr/bin/ruby

class HelloWorld
  def initialize(name)
    @name = name.capitalize
  end
  def sayHi
    puts "Hello World! I am #{@name}."
  end
end

hello = HelloWorld.new("Longbo Ma")
hello.sayHi
