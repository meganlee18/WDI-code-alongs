class Dish < ActiveRecord::Base
  validates :name, length: {in: 6..20} #Set rule that user must save a name
  validates :image_url, presence: true

  has_many :comments
  has_many :likes
end
