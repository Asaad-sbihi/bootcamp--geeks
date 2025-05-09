class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Create another cat breed named Siamese which inherits from the Cat class
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
cat1 = Bengal("Simba", 3)
cat2 = Chartreux("Luna", 2)
cat3 = Siamese("Mimi", 4)

# all_cist (liste):
all_cats = [cat1, cat2, cat3]

#Those three cats are Sara’s pets. Create a variable called sara_pets which value
sara_pets = Pets(all_cats)

# walk method :
sara_pets.walk()

