describe User do
  it "is invalid without a name" do
    user = User.new
    user.password = "longenoughpasswordisvalid"
    expect(user).to_not be_valid
  end

  it "is valid with name and password" do
    user = User.new
    user.name = "some name"
    user.password = "longenoughpasswordisvalid"
    expect(user.valid?).to eq true
  end

  it "is invalid if password is less than 8 characters" do
    user = User.new
    user.name = "validName"
    user.password = "short"
    expect(user).to_not be_valid
  end
end
