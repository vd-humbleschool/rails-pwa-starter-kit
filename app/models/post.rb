class Post < ApplicationRecord
  belongs_to :attachment, optional: true
end
