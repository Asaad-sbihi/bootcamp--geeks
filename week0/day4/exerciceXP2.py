class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking"
    

    def run_speed(self) :
        return (self.weight/self.age) * 10
    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} won the fight"
        elif my_power < other_power:
            return f"{other_dog.name} won the fight"
        else:
            return "It's a draw!"
        

dog1 = Dog("Mouad", 5, 20)
dog2 = Dog("Achraf", 3, 18)
dog3 = Dog("Ousama", 4, 25)

print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print(f"{dog1.name} speed: {dog1.run_speed()}")
print(f"{dog2.name} speed: {dog2.run_speed()}")
print(f"{dog3.name} speed: {dog3.run_speed()}")


print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))


    
    
        


