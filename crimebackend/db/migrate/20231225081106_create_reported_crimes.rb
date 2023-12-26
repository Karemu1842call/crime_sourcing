class CreateReportedCrimes < ActiveRecord::Migration[7.0]
  def change
    create_table :reported_crimes do |t|
      t.string :name
      t.string :tel_no
      t.string :location
      t.text :description

      t.timestamps
    end
  end
end
