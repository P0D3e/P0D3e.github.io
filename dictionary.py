dictionary = {}

alfabet = input("Input a word to get a letter counted output. : ")

for bokstav in alfabet:
    if bokstav in dictionary:
        dictionary[bokstav] += 1
        
    else:
        dictionary[bokstav] = 1

print(dictionary)