def find_pet_by_name(pet_shop_input, input_pet_name)
  for pet_name in pet_shop_input[:pets]
    if pet_name[:name] == input_pet_name
     return pet_name
    end
  end
  return nil
end


find_pet_by_name(@pet_shop, "Merlin")
