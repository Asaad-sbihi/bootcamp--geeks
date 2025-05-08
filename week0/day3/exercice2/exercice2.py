class Dog :
    def __init__(self,name,height):
        self.name = name
        self.height = height

    def bark(self):
        print((f"{self.name} woof!"))

    def jumb(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")


# Asdd god david
davids_dog = Dog("Rex", 50)

# Print the details of his dog (ie. name and height) and call the methods bark and jump.

print(f"David's dog name is {davids_dog.name}")
print(f"David's dog height is {davids_dog.height} cm")

davids_dog.bark()
davids_dog.jumb()


sarahs_dog = Dog("Teacup", 20)

sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger")
else:
    print(f"{sarahs_dog.name} is bigger")




