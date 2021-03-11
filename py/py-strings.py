# you can use double or single quotes:

print("hello")
print('hello')

a = "hola"
print(a)

a = """ Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)


#Get the character at position 1 (remember that the first character has the position 0):
a = "Hello, World!"
print(a[1])


#looping through a string
for x in "banana":
    print(x)

#string length
a = "Hello, World!"
print(len(a))


#check string
txt = "The best things in life are free!"
print("free" in txt)

txt = "The best things in life are free!"
if "free" in txt:
    print("Yes, 'free' is present.")


#check if not
txt = "The best things in life are free!"
print("expenisve" not in txt)


txt = "The best things in life are free!"
if "expensive" not in txt:
    print("Yes, 'expensive' is NOT present")