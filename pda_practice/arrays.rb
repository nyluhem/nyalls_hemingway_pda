array = [1, 4, 6, 3, 2, 9]

def select_higher_than(array, number)
  p array
  array_1 = array.select{|a| a > number}
  p array_1
end

select_higher_than(array, 3)
