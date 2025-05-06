# Exrcice1:Hello world
print(("Hello world\n") * 4)
# Exrcice2:calcul
result = (99 ** 3) * 8
print(result)
# exercice3:what's u name?
user_name = input("What's u name? ")
my_name = "Asaad"
if user_name == my_name :
  print("we have same name hahahaha")
# Exricice 4:  Tall enough to ride a roller coaster
height = int(input("what u height?"))
if height > 145:
    print("Congrulation!")
else:
    print("not admis")
# Exrcice 5: Favorite Numbers
my_fav_numbers ={10,20,30}
my_fav_numbers.add(40)
my_fav_numbers.add(50)
friend_fav_numbers = {3, 9,12}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("my fav numbers :", my_fav_numbers)
print("fr fav numbers :", friend_fav_numbers)
print("our fv numbers:", our_fav_numbers)
# exrecice6:tuple
my_tuple = (1, 2, 3)
#  is  not possible :my_tuple.add(50)
print(my_tuple)
# exercice7:List 
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove('Banana')
basket.remove('Blueberries')
basket.append('kiwi')
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
print("Number Apples:", apple_count)
basket.clear()
print(basket)
# exercice8:Sandwich Orders
sandwich_orders = [
    "Tuna sandwich", 
    "Pastrami sandwich", 
    "Avocado sandwich", 
    "Pastrami sandwich", 
    "Egg sandwich", 
    "Chicken sandwich", 
    "Pastrami sandwich"
]
print("Sorry, the deli has run out of pastrami.")

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    finished_sandwiches = []
    while sandwich_orders:
     current_sandwich = sandwich_orders.pop(0) 
    print(f"I made your {current_sandwich.lower()}")
    finished_sandwiches.append(current_sandwich)
    print("\nAll sandwiches made:")
for sandwich in finished_sandwiches:
    print(f"- {sandwich}")





