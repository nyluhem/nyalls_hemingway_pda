@pet_shop = {
  pets: [
    {
      name: "Arthur",
      pet_type: :dog,
      breed: "Husky",
      price: 900,
    },
    {
      name: "Tristan",
      pet_type: :dog,
      breed: "Basset Hound",
      price: 800,
    },
    {
      name: "Merlin",
      pet_type: :cat,
      breed: "Egyptian Mau",
      price: 1500,
    }
  ],
  admin: {
    total_cash: 1000,
    pets_sold: 0,
  },
  name: "Camelot of Pets"
}

def find_pet_by_name(pet_shop_input, input_pet_name)
  for pet_name in pet_shop_input[:pets]
    if pet_name[:name] == input_pet_name
     p pet_name
    end
  end
  return nil
end

find_pet_by_name(@pet_shop, "Merlin")
