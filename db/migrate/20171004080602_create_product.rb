class CreateProduct < ActiveRecord::Migration
  def change
    create_table :product  do |t|
      t.integer :product_id
      t.string :title
      t.integer :number_of_searches
    end
  end
end
