class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat('zoubayda',5)
cat2 = Cat('faiha',3)
cat3 = Cat('khaoula',10)
# 2:Outside of the class, create a function that finds the oldest cat and returns the cat.
def find_oldest_cat(cats):
    oldest = cats[0] 
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest 
oldest_cat = find_oldest_cat([cat1, cat2, cat3])

# 3:Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

