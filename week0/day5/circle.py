# creer class circle
class circle:
    def __init__(self,radius=None,diameter=None):
# set raduis,diameter 
        if radius:
            self.radius =radius
            self.diameter = radius*2

        elif diameter:
            self.diameter=diameter
            self.radius=diameter/2
# function 
    def get_raduis(self):
        return self.radius
    def get_diameter(self):
        return self.diameter
    
# area
    def area(self):
        return 3.14159 *(self.radius)
    

# __str
    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area():.2f})"
    

# __add__
    def __add__(self, other):
        return circle(radius=self.radius + other.radius)
    
# __lt__
    def __lt__(self, other):
        return self.radius < other.radius
    
# __eq__
    def __eq__(self, other):
        return self.radius == other.radius





c1 = circle(radius=5)
c2 = circle(diameter=20)

print(c1)   # Circle(radius=5, diameter=10, area=78.54)
print(c2)   # Circle(radius=10, diameter=20, area=314.16)

# Addition
c3 = c1 + c2
print(c3)

# Comparison
print(c1 < c2)   # True
print(c1 == c2)  # False

# Sorting
circles = [c2, c1, c3]
sorted_circles = sorted(circles)
for c in sorted_circles:
    print(c)


    

    


    



