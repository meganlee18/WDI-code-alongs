class User < ApplicationRecord
  validates :name, presence: true
  validates :password, length: {minimum: 8}
end
