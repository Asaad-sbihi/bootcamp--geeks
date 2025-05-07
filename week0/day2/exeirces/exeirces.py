 # Exeirces1: Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dicts = dict(zip(keys,values))

print(dicts)
# exeirces2:Cinemax #2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for person, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    
    print(f"{person} age {age} → prix ${price}")
    total_cost += price

print(f"\ntotal ${total_cost}")
# EXeirces 3:Zara
# 1️⃣ Créez le dictionnaire "brand"
brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
    }
}

# 2️⃣ Modifiez le nombre de magasins à 2
brand['number_stores'] = 2

# 3️⃣ Affichez les types de clients de Zara
clients = brand['type_of_clothes']
print(f"Les clients de Zara sont : {clients}")

# 4️⃣ Ajoutez le pays de création
brand['country_creation'] = 'Spain'

# 5️⃣ Vérifiez si 'international_competitors' existe et ajoutez 'Desigual'
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

# 6️⃣ Supprimez la date de création
del brand['creation_date']

# 7️⃣ Affichez le dernier concurrent international
last_competitor = brand['international_competitors'][-1]
print(f"Le dernier concurrent international est : {last_competitor}")

# 8️⃣ Affichez les couleurs principales aux États-Unis
us_colors = brand['major_color']['US']
print(f"Les couleurs principales aux États-Unis sont : {us_colors}")

# 9️⃣ Affichez le nombre de paires clé-valeur dans le dictionnaire
print(f"Le nombre de paires clé-valeur est : {len(brand)}")

# 🔟 Affichez les clés du dictionnaire
print(f"Les clés du dictionnaire sont : {list(brand.keys())}")

# 11️⃣ Créez un autre dictionnaire "more_on_zara"
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}

# 12️⃣ Mettez à jour "brand" avec "more_on_zara"
brand.update(more_on_zara)

# 13️⃣ Affichez la valeur actuelle de 'number_stores'
print(f"Le nombre de magasins après mise à jour est : {brand['number_stores']}")






#Exercice 4:
def describe_city(city, country="Morocco"):
    print(f"{city} is in {country}")

describe_city("Rabat")
describe_city("Casablanca")
describe_city("Paris", "France")
# Exercice5:Random
import random

def guess(x):
    number = random.randint(1, 100)
    if x == number:
        print("You win")
    else:
        print("You lose")
        print("The number was", number)
        print("The number you entered was", x)

guess(int(input("Enter a number: ")))   
# Exercice6: Let’s create some personalized shirts !
def make_shirt(size="Large", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'.")

make_shirt()

make_shirt(size="Medium")

make_shirt(size="Small", message="Code more, worry less!")


# Exeirce7: Temperature Advice
import random

def get_random_temp():
    return random.randint(-10, 40)

def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temp <= 23:
        print("It's a pleasant day! A light jacket should be fine.")
    elif 24 <= temp <= 32:
        print("It's warm outside! Perfect for short sleeves.")
    elif 33 <= temp <= 40:
        print("It's really hot! Stay hydrated and avoid the sun during peak hours.")
    else:
        print("Unusual temperature detected!")

main()
  

# Exercice8:Star Wars Quiz
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def ask_questions():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ").strip()
        if user_answer.lower() == item["answer"].lower():
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })
    
    return correct, incorrect, wrong_answers

def show_results(correct, incorrect, wrong_answers):
    print(f"\nYou got {correct} correct and {incorrect} incorrect.")

    if wrong_answers:
        print("\nHere are the questions you missed:")
        for item in wrong_answers:
            print(f"- Q: {item['question']}")
            print(f"  Your answer: {item['your_answer']}")
            print(f"  Correct answer: {item['correct_answer']}\n")

    if incorrect > 3:
        print("You got more than 3 wrong answers. Would you like to play again? (yes/no)")
        retry = input().strip().lower()
        if retry == "yes":
            main()

def main():
    print("Welcome to the Star Wars Quiz! \n")
    correct, incorrect, wrong_answers = ask_questions()
    show_results(correct, incorrect, wrong_answers)

main()