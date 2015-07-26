class AddAuthorToPost < ActiveRecord::Migration
  def change
    add_column :posts, :author, :string, null: false, default: "Islander"
  end

  def down
    remove_column :posts, :author
  end
end
