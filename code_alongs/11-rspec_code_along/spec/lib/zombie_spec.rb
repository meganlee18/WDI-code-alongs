#Convention over configuration

require "zombie"
#require_relative '../../lib/zombie'

describe Zombie do
  context "default" do
    #special function which reruns every time a spec runs
    let(:zombie) { Zombie.new }

    #specification
    it "is named Fred" do
      #expectation
      expect(zombie.name).to eq "Fred"
    end

    it "is hungry" do
      #expect(zombie.hungry?).to be true
      expect(zombie).to be_hungry
    end

    it "has eaten no brains" do
      expect(zombie.brains_eaten).to be < 1
    end

    it "keeps track of the brains it eats" do
      zombie.eat
      expect { zombie.eat }.to change { zombie.brains_eaten }.by(1)
    end
  end

  context "with inputs" do
    let (:zombie) { zombie = Zombie.new("Sally", 3, false) }

    it "is named Sally" do
      expect(zombie.name).to eq "Sally"
    end

    it "is not hungry" do
      expect(zombie).to_not be_hungry
    end
  end
end
